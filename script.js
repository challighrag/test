const messages = [
    "No matter how tough things get, always remember that you're stronger than any challenge that comes your way.",
    "I believe in you, in your brilliance, and in everything you’re capable of achieving.",
    "Even on your hardest days, you shine in ways that make me proud to stand by your side.",
    "When you feel overwhelmed, know that I'm always here to lift you up and remind you of the amazing person you are.",
    "You're not alone in this—I’ll always be here, cheering for you, loving you, and believing in you every step of the way.",
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
