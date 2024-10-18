// Array of dice images
const images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];

// Function to spin both Player 1 and Player 2 dice
function spinDice() {
    let player1 = document.querySelector('.p1');
    let player2 = document.querySelector('.p2');

    // Add the spinning class to both images
    player1.classList.add('spin');
    player2.classList.add('spin');

    // Simulate the spinning and then show the result
    setTimeout(function() {
        // Random number between 1 and 6 for both players
        let randomNumber1 = Math.floor(Math.random() * 6);
        let randomNumber2 = Math.floor(Math.random() * 6);

        // Set new image sources based on the random number
        player1.src = images[randomNumber1];
        player2.src = images[randomNumber2];

        // Remove the spinning class after spinning completes
        player1.classList.remove('spin');
        player2.classList.remove('spin');

        // Display the winner
        let gameMessage = document.querySelector('.game');
        if (randomNumber1 > randomNumber2) {
            gameMessage.innerHTML = "🚩Player 1 won!";
        } else if (randomNumber1 < randomNumber2) {
            gameMessage.innerHTML = "Player 2 won!🚩";
        } else {
            gameMessage.innerHTML = "🚩It's a tie!🚩";
        }

    }, 800); // Wait for 2 seconds for the spinning animation to finish
}

// Trigger the dice spin when the page loads
window.onload = spinDice;
