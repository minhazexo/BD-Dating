document.getElementById('sendMessage').addEventListener('click', function() {
    const messageText = document.getElementById('messageText').value;
    if (messageText.trim() !== "") {
        const messageList = document.querySelector('.message-list');
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;
        messageList.appendChild(message);
        document.getElementById('messageText').value = ""; // Clear the input
    }
});
