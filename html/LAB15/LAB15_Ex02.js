const messagesDiv = document.getElementById("messages");

const input = document.getElementById("input");
const inputUsername = document.getElementById("inputUsername");

const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const sendButton = document.getElementById("button");

const usernameInputGroup = document.getElementById("usernameInputGroup");
const messageInputGroup = document.getElementById("messageInputGroup");

let username;
let socket;

function setConnectedUI(connected) {
    if (connected) {
        usernameInputGroup.classList.add("hidden");
        messageInputGroup.classList.remove("hidden");
        disconnectButton.classList.remove("hidden");

        input.disabled = false;
        sendButton.disabled = false;
    } else {
        usernameInputGroup.classList.remove("hidden");
        messageInputGroup.classList.add("hidden");
        disconnectButton.classList.add("hidden");

        input.disabled = true;
        sendButton.disabled = true;
    }
}

connectButton.addEventListener("click", () => {
    const inputName = inputUsername.value.trim();
    if (inputName) {
        username = inputName;

        socket = new WebSocket("ws://localhost:3000");

        socket.addEventListener("open", () => {
            socket.send(username);
            setConnectedUI(true);
        })

        socket.addEventListener("message", (event) => {
            const message = document.createElement("div");
            message.textContent = event.data;
            messagesDiv.appendChild(message);
        })
        
        socket.addEventListener("close", () => {
            setConnectedUI(false);
            socket = null;
        })

    }
})

sendButton.addEventListener("click", () => {
    const messageInput = input.value.trim();
    if (messageInput && username) {
        socket.send(messageInput);
        input.value = "";
    }
})

disconnectButton.addEventListener("click", () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
    }
})

// node LAB15_Ex01.js
// npx http-server .