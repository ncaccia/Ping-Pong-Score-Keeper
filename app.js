///////////////
// TASK
///////////////
// OK | Select a number of points to play
// OK | Add points for each player while pressing the buttons
// OK | turn the h1 socre keeper accordingly
// OK | Reset the score keeper and free the buttons
// Paint the winner in green on the h1 and the looser on red
// Block the buttons once the score is completed

const gameScoreSelect = document.getElementById('gameScore');
const pOneScoreTag = document.getElementById('player1');
const pTwoScoreTag = document.getElementById('player2');
const pOneAddPoint = document.getElementById('add1ToPlayer1');
const pTwoAddPoint = document.getElementById('add1ToPlayer2');
const resetGame = document.getElementById('resetGame');

// Declare the game score target as a global variable
let gameSelectedValue = 3;

// Listen to the selected game value target
gameScoreSelect.addEventListener('change', function (e) {
    gameSelectedValue = parseInt(e.target.value);
    pOneTotalScore = 0;
    pTwoTotalScore = 0;
    updateScoreTags(pOneScoreTag, pOneTotalScore);
    updateScoreTags(pTwoScoreTag, pTwoTotalScore);
    console.log(`First to get ${gameSelectedValue} wins`);
})

// Declare player scores with descriptive variable names
let pOneTotalScore = 0;
let pTwoTotalScore = 0;

// Update score display function (reusable & prevents code duplication)
function updateScoreTags(playerScoreElement, score) {
    playerScoreElement.textContent = score;
}

// Reset game button event listener
 resetGame.addEventListener('click', () => {
    pOneTotalScore = 0;
    pTwoTotalScore = 0;
    updateScoreTags(pOneScoreTag, pOneTotalScore);
    updateScoreTags(pTwoScoreTag, pTwoTotalScore);
    pOneAddPoint.disabled = false; 
    pTwoAddPoint.disabled = false;
    pOneScoreTag.classList.remove("has-text-danger", "has-text-success");
    pTwoScoreTag.classList.remove("has-text-danger", "has-text-success");
    console.log('Game reset!');
});

// Player 1 add point button event listener
pOneAddPoint.addEventListener('click', () => {
    pOneTotalScore++;
    updateScoreTags(pOneScoreTag, pOneTotalScore);
    if (pOneTotalScore === gameSelectedValue) {
        pOneScoreTag.classList.toggle("has-text-success");
        pTwoScoreTag.classList.toggle("has-text-danger");
        pOneAddPoint.disabled = true; 
        pTwoAddPoint.disabled = true;
        console.log("Need to Reset");
    }
});

// Player 2 add point button event listener
pTwoAddPoint.addEventListener('click', () => {
    pTwoTotalScore++;
    updateScoreTags(pTwoScoreTag, pTwoTotalScore);
    if (pTwoTotalScore === gameSelectedValue) {
        pOneScoreTag.classList.toggle("has-text-danger");
        pTwoScoreTag.classList.toggle("has-text-success");
        pOneAddPoint.disabled = true; 
        pTwoAddPoint.disabled = true;
        console.log("Need to Reset");
    }
});



