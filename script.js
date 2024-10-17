const messages = [
    "You're smarter than you think!",
    "Believe in yourself, because I believe in you!",
    "You are capable of amazing things!",
    "Don't forget to smile, it's your best accessory!",
    "Take a deep breath, you've got this!",
    "I love you!"
];

let currentMessageIndex = 0;

document.getElementById('generateMessage').addEventListener('click', () => {
    const messageButton = document.getElementById('generateMessage');
    const messageDisplay = document.getElementById('cuteMessage');
    
    if (currentMessageIndex < messages.length) {
        const message = messages[currentMessageIndex];
        messageDisplay.innerText = message;
        currentMessageIndex++;
        
        if (message === "I love you!") {
            messageButton.disabled = true;
            messageDisplay.innerText += "\nTake care 😘";
            messageButton.innerText = "Good luck in your exams🫶🏼";
        }
    } else {
        messageDisplay.innerText = "You've seen all the messages! ❤️";
        currentMessageIndex = 0;
        messageButton.disabled = false;  // Enable button again after reset
        messageButton.innerText = "Show me more encouragement!";  // Reset button text
    }
});
