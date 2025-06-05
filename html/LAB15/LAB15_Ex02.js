const socket = new WebSocket("ws://localhost:3000");

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("input");
const sendButton = document.getElementById("button");

const inputUsername = document.getElementById("inputUsername");
const connectButton = document.getElementById("connectButton");
const usernameInputGroup = document.getElementById("usernameInputGroup");
const messageInputGroup = document.getElementById("messageInputGroup");

let username = null;
input.disabled = true;
sendButton.disabled = true;

messageInputGroup.style.opacity = "0";
messageInputGroup.style.height = "0";

connectButton.addEventListener("click", () => {
    const inputName = inputUsername.value.trim();
    if (inputName) {
        username = inputName;

        inputUsername.disabled = true;
        connectButton.disabled = true;

        input.disabled = false;
        sendButton.disabled = false;

        messageInputGroup.style.opacity = "1";
        messageInputGroup.style.height = "auto";

        usernameInputGroup.style.opacity = "0";
        usernameInputGroup.style.height = "0";

        socket.send(username);
    }
});

sendButton.addEventListener("click", () => {
    const messageInput = input.value.trim();
    if (messageInput && username) {
        socket.send(messageInput);
        input.value = "";
    }
});

socket.addEventListener("message", (event) => {
    const message = document.createElement("div");
    message.textContent = event.data;
    messagesDiv.appendChild(message);
});

// node LAB15_Ex01.js
// npx http-server .