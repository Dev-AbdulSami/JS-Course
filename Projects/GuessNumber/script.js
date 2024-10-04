    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 10; // Limit the number of attempts
    let score = 0;

    function guessNumber() {
        const guess = parseInt(document.getElementById('guessInput').value, 10);
        const resultMessage = document.getElementById('resultMessage');
        const scoreDisplay = document.getElementById('scoreDisplay');

        if (isNaN(guess) || guess < 1 || guess > 100) {
            resultMessage.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        attempts++;

        if (guess < randomNumber) {
            resultMessage.textContent = 'Too low! Try again.';
        } else if (guess > randomNumber) {
            resultMessage.textContent = 'Too high! Try again.';
        } else {
            score = Math.max(0, maxAttempts - attempts + 1); // Calculate score based on attempts
            resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            scoreDisplay.textContent = `Your score: ${score}`;
            return; // End game if the number is guessed correctly
        }

        if (attempts >= maxAttempts) {
            resultMessage.textContent = `Game over! The correct number was ${randomNumber}.`;
            scoreDisplay.textContent = `Your final score: ${score}`;
        }
    }
