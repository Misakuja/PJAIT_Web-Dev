const messagesDiv = document.getElementById("messages");

const input = document.getElementById("input");
const inputUsername = document.getElementById("inputUsername");
const userSelect = document.getElementById("userSelect");

const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const sendButton = document.getElementById("button");

const usernameInputGroup = document.getElementById("usernameInputGroup");
const messageInputGroup = document.getElementById("messageInputGroup");
const userSelectGroup = document.getElementById("userSelectGroup");

let username;
let socket;

function setConnectedUI(connected) {
    if (connected) {
        usernameInputGroup.style.display = "none";
        messageInputGroup.style.display = "flex";
        disconnectButton.style.display = "block";
        userSelectGroup.style.display = "flex";
        input.disabled = false;
        sendButton.disabled = false;
    } else {
        usernameInputGroup.style.display = "flex";
        messageInputGroup.style.display = "none";
        disconnectButton.style.display = "none";
        userSelectGroup.style.display = "none";
        input.disabled = true;
        sendButton.disabled = true;
        userSelect.innerHTML = '';
    }
}

setConnectedUI(false);

connectButton.addEventListener("click", () => {
    const inputName = inputUsername.value.trim();
    if (inputName) {
        username = inputName;
        socket = new WebSocket("ws://localhost:3000");

        socket.addEventListener("open", () => {
            socket.send(username);
            setConnectedUI(true);
        });

        socket.addEventListener("message", (event) => {
            try {
                const parsed = JSON.parse(event.data);
                if (parsed.type === "userList") {
                    updateUserList(parsed.users);
                    return;
                }
            } catch (_) {
            }

            const message = document.createElement("div");
            message.textContent = event.data;
            messagesDiv.appendChild(message);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });

        socket.addEventListener("close", () => {
            setConnectedUI(false);
            socket = null;
        });
    }
});

sendButton.addEventListener("click", () => {
    const messageInput = input.value.trim();
    if (messageInput && socket && socket.readyState === WebSocket.OPEN) {
        const recipient = userSelect.value;
        if (recipient) {
            socket.send(`@${recipient}: ${messageInput}`);
        } else {
            socket.send(messageInput);
        }
        input.value = "";
    }
});

disconnectButton.addEventListener("click", () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
    }
});

function updateUserList(users) {
    userSelect.innerHTML = '<option value="">Everyone (public)</option>';
    users.forEach(user => {
        if (user !== username) {
            const option = document.createElement("option");
            option.value = user;
            option.textContent = user;
            userSelect.appendChild(option);
        }
    });
}
