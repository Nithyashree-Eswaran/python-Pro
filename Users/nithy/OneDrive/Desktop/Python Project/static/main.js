document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const form = document.getElementById('message-form');
    const messageInput = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        socket.send(message);
        messageInput.value = '';
    });

    socket.on('message', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        chatBox.appendChild(messageElement);
    });
});
