function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("response-message").innerText = "Thank you, your message has been sent!";
    } else {
        document.getElementById("response-message").innerText = "Please fill out all fields.";
}
}
// Array of words to display
const words = ["Hello", "World", "This", "is", "a", "word-by-word", "animation"];
let index = 0;

function displayNextWord() {
    const wordDisplay = document.getElementById("word-display");

    // Set the next word and add "show" class for fade-in effect
    wordDisplay.innerText = words[index];
    wordDisplay.classList.add("show");

    // After delay, remove the "show" class to hide the word
    setTimeout(() => {
        wordDisplay.classList.remove("show");
    }, 1000);

    // Move to the next word or reset to start
    index = (index + 1) % words.length;
}

// Display words every 1.5 seconds
setInterval(displayNextWord, 1500);