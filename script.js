const messages = [
    "You're smarter than you think!",
    "Believe in yourself, because I believe in you!",
    "You are capable of amazing things!",
    "Don't forget to smile, it's your best accessory!",
    "Take a deep breath, you've got this!",
    "I love you!"
]
let currentMessageIndex = 0
document.getElementById('generateMessage').addEventListener('click', () => {
    if (currentMessageIndex < messages.length) {
        const message = messages[currentMessageIndex]
        document.getElementById('cuteMessage').innerText = message
        currentMessageIndex++
        if (message === "I love you") {
            document.getElementById('generateMessage').disabled = true
            document.getElementById('cuteMessage').innerText += "\nTake care 😘"
            document.getElementById('generateMessage').innerText = "Good luck in your exams🫶🏼"
        }
    } else {
        document.getElementById('cuteMessage').innerText = "You've seen all the messages! ❤️";
        currentMessageIndex = 0
    }
})