const socket = new WebSocket("ws://localhost:3000");

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("input");
const sendButton = document.getElementById("button");

sendButton.addEventListener("click", () => {
    const messageInput = input.value.trim();
    if (messageInput) {
        socket.send(messageInput);
        input.value = "";
    }
})

socket.addEventListener("message", (event) => {
    const message = document.createElement("div");
    message.textContent = event.data;
    messagesDiv.appendChild(message);
})

// node LAB14_Ex01.js
// npx http-server .