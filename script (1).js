const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');
const chatMessages = document.querySelector('.chat-messages');

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('user-message'); // Style user messages
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        // Scroll to the bottom of the messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});