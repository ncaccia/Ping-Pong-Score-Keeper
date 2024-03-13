// Group everything that has to be with each player into an object
const player1 = {
    score: 0,
    button: document.getElementById('addToPlayer1'),
    display: document.getElementById('player1Display'),
}
const player2 = {
    score: 0,
    button: document.getElementById('addToPlayer2'),
    display: document.getElementById('player2Display'),
}

const resetButton = document.getElementById('resetGame');
const winningScoreSelect = document.getElementById('gameScore');
let winningScore = 3;
let isGameOver = false;

// Create a generic function players agnostic
function updateScores(player, oponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            oponent.display.classList.add("has-text-danger");
            player.button.disabled = true; 
            oponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// Create event listeners for both P1 and P2
player1.button.addEventListener('click', () => {
    updateScores(player1, player2)
})

player2.button.addEventListener('click', () => {
    updateScores(player2, player1)
})

// // Listen to the selected game value target
winningScoreSelect.addEventListener('change', function (e) {
    winningScore = parseInt(e.target.value);
    console.log(`First to get ${winningScore} wins`);
    resetGame();
})

// // Reset game button event listener
resetButton.addEventListener('click', resetGame)

function resetGame(player, oponent) {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-danger", "has-text-success");    
        p.button.disabled = false; 
    }
};
