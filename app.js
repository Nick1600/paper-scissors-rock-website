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
const win = document.querySelector('.win');
const draw = document.querySelector('.draw');
const loss = document.querySelector('.loss');

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
    win.style.display = 'contents';
    draw.style.display = 'none';
    loss.style.display = 'none';
}
function displayDraw() {
    win.style.display = 'none';
    draw.style.display = 'contents';
    loss.style.display = 'none';
}
function displayLoss() {
    win.style.display = 'none';
    draw.style.display = 'none';
    loss.style.display = 'contents';
}

//get comp option
function getCompChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    console.log(randNumber);
    if (randNumber === 0) {
        return 'rock';
    } else if (randNumber === 1) {
        return 'paper';
    } else if (randNumber === 2) {
        return 'scissors';
    }
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
    } else if (compChoice === 'scissors') {
        displayCompScissors();
        displayWin();
    }
}
function userChoseScissors() {
    displayUserScissors()
    const compChoice = getCompChoice()

    if (compChoice === 'rock') {
        displayCompRock();
        displayLoss();
    } else if (compChoice === 'paper') {
        displayCompPaper();
        displayWin();
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
    } else if (compChoice === 'paper') {
        displayCompPaper();
        displayDraw();
    } else if (compChoice === 'scissors') {
        displayCompScissors();
        displayLoss();
    }
}


//EVENT LISTENERS
paperSelector.addEventListener('click', userChosePaper);
scissorsSelector.addEventListener('click', userChoseScissors);
rockSelector.addEventListener('click', userChoseRock);
