// Function Declaration - Define the checkAnswer function
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";
    
    // Retrieve the User's Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare the User's Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // If correct, display success message
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // If incorrect, display error message
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
