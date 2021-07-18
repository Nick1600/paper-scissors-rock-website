//SELECTORS
//Options
const paperSelector = document.querySelector('.one');
const scissorsSelector = document.querySelector('.two');
const rockSelector = document.querySelector('.three');

//Selections display
const userRock = document.querySelector('.urock');
const userPaper = document.querySelector('.upaper');
const userScissors = document.querySelector('.uscissors');

const compRock = document.querySelector('.crock');
const compPaper = document.querySelector('.cpaper');
const compScissors = document.querySelector('.cscissors');

//Results
const winOne = document.querySelector('.win-1');
const winTwo = document.querySelector('.win-2');
const winThree = document.querySelector('.win-3');

const drawOne = document.querySelector('.draw-1');
const drawTwo = document.querySelector('.draw-2');
const drawThree = document.querySelector('.draw-3');

const lossOne = document.querySelector('.loss-1');
const lossTwo = document.querySelector('.loss-2');
const lossThree = document.querySelector('.loss-3');

//Win counters
const playerWinCount = document.querySelector('.player-wins');
const compWinCount = document.querySelector('.computer-wins');

//FUNCTIONS
//Display
function displayUserRock() {
    userRock.style.display = 'contents';
    userPaper.style.display = 'none';
    userScissors.style.display = 'none';
}
function displayUserPaper() {
    userRock.style.display = 'none';
    userPaper.style.display = 'contents';
    userScissors.style.display = 'none';
}
function displayUserScissors() {
    userRock.style.display = 'none';
    userPaper.style.display = 'none';
    userScissors.style.display = 'contents';
}

function displayCompRock() {
    compRock.style.display = 'contents';
    compPaper.style.display = 'none';
    compScissors.style.display = 'none';
}
function displayCompPaper() {
    compRock.style.display = 'none';
    compPaper.style.display = 'contents';
    compScissors.style.display = 'none';
}
function displayCompScissors() {
    compRock.style.display = 'none';
    compPaper.style.display = 'none';
    compScissors.style.display = 'contents';
}

function displayWin() {
    let randNumber = Math.floor(Math.random() * 3);
    
    if (randNumber === 0) {
        winOne.style.display = 'contents';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';

        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    } else if (randNumber === 2) {
        winOne.style.display = 'none';
        winTwo.style.display = 'contents';
        winThree.style.display = 'none';
        
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    } else if (randNumber === 3) {
        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'contents';
        
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    }
}
function displayDraw() {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        drawOne.style.display = 'contents';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    } else if (randNumber === 1) {
        drawOne.style.display = 'none';
        drawTwo.style.display = 'contents';
        drawThree.style.display = 'none'

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    } else if (randNumber === 2) {
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'contents'

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';
    }
}
function displayLoss() {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        lossOne.style.display = 'contents';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'none';

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
    } else if (randNumber === 1) {
        lossOne.style.display = 'none';
        lossTwo.style.display = 'contents';
        lossThree.style.display = 'none';

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
    } else if (randNumber === 2) {
        lossOne.style.display = 'none';
        lossTwo.style.display = 'none';
        lossThree.style.display = 'contents';

        winOne.style.display = 'none';
        winTwo.style.display = 'none';
        winThree.style.display = 'none';
        
        drawOne.style.display = 'none';
        drawTwo.style.display = 'none';
        drawThree.style.display = 'none'
    }
    
}

//get comp option
function getCompChoice() {
    const randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        return 'rock';
    } else if (randNumber === 1) {
        return 'paper';
    } else if (randNumber === 2) {
        return 'scissors';
    }
}

//Win counters
let playerWon = 0;
let compOne = 0;

function incrementPlayerWinCount() {
    playerWon += 1;
    playerWinCount.innerHTML = 'Wins: ' + playerWon;
}
function incrementCompWinCount() {
    compOne += 1;
    compWinCount.innerHTML = 'Losses: ' + compOne;
}

//User choice and outcomes
function userChoseRock() {
    displayUserRock()
    const compChoice = getCompChoice()

    if (compChoice === 'rock') {
        displayCompRock();
        displayDraw();
    } else if (compChoice === 'paper') {
        displayCompPaper();
        displayLoss();
        incrementCompWinCount();
    } else if (compChoice === 'scissors') {
        displayCompScissors();
        displayWin();
        incrementPlayerWinCount();
    }
}
function userChoseScissors() {
    displayUserScissors()
    const compChoice = getCompChoice()

    if (compChoice === 'rock') {
        displayCompRock();
        displayLoss();
        incrementCompWinCount();
    } else if (compChoice === 'paper') {
        displayCompPaper();
        displayWin();
        incrementPlayerWinCount();
    } else if (compChoice === 'scissors') {
        displayCompScissors();
        displayDraw();
    }
}
function userChosePaper() {
    displayUserPaper()
    const compChoice = getCompChoice()

    if (compChoice === 'rock') {
        displayCompRock();
        displayWin();
        incrementPlayerWinCount();
    } else if (compChoice === 'paper') {
        displayCompPaper();
        displayDraw();
    } else if (compChoice === 'scissors') {
        displayCompScissors();
        displayLoss();
        incrementCompWinCount();
    }
}



//EVENT LISTENERS
paperSelector.addEventListener('click', userChosePaper);
scissorsSelector.addEventListener('click', userChoseScissors);
rockSelector.addEventListener('click', userChoseRock);
