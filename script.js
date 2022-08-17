//Declaring all variables that i will use
let paperButton = document.querySelector('.paper')
let rockButton = document.querySelector('.rock')
let scissorButton = document.querySelector('.scissor')
let humanCount = 0;
let computerCount = 0;
let pHuman = document.querySelector('.humanScore')
let pComputer = document.querySelector('.computerScore')
let finalScore = document.querySelector('.finalScore')
let restartButton = document.querySelector('.restart')
let humanName = document.querySelector('.humanName')
let humanDiv = document.querySelector('.humanDiv')
let computerDiv = document.querySelector('.ComputerDiv')
let year = document.querySelector('.year')
let currentYear = new Date();
year.innerHTML = currentYear.getFullYear();
humanName.innerHTML = 'You'

let name = prompt('What is your name?')




let lowCaseName = name.toLowerCase()
humanName.innerHTML = lowCaseName;
humanDiv.innerHTML = '🤔';
computerDiv.innerHTML = '🤔';

//Computer play function

function computer() {
    let arr = ['🪨', '📄', '✂️'];
    let arrRandom = Math.floor(Math.random() * arr.length);
    return arr[arrRandom];
}


//Game function
function game(humanChoice, computerChoice) {

    if ((humanChoice == '🪨' && computerChoice == '✂️') ||
        (humanChoice == '✂️' && computerChoice == '📄') ||
        (humanChoice == '📄' && computerChoice == '🪨')) {
        humanCount++;

        pHuman.innerHTML = humanCount;

        finalScore.innerHTML = `${lowCaseName}  Wins this round `
        humanDiv.innerHTML = humanChoice;
        computerDiv.innerHTML = computerChoice;
        if (humanCount == 5) {
            finalScore.innerHTML = `${lowCaseName} won the match 🎉`
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;

        }

    } else if (humanChoice == computerChoice) {
        computerDiv.innerHTML = computerChoice;
        humanDiv.innerHTML = humanChoice;
        finalScore.innerHTML = `Its a tie 👔 `;
    } else {
        finalScore.innerHTML = ''
        computerCount++;
        pComputer.innerHTML = computerCount;
        humanDiv.innerHTML = humanChoice;
        computerDiv.innerHTML = computerChoice;
        finalScore.innerHTML = `Computer Wins this round`
        if (computerCount == 5) {
            finalScore.innerHTML = 'Computer won the match 🎉'
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;

        }

    }

}
restartButton.addEventListener('click', newGame)

function newGame() {

    humanName.innerHTML = 'You'
    name = prompt('What is your name?')
    lowCaseName = name.toLowerCase()
    humanDiv.innerHTML = '🤔';
    computerDiv.innerHTML = '🤔';
    humanName.innerHTML = lowCaseName;
    paperButton.disabled = false;
    rockButton.disabled = false;
    scissorButton.disabled = false;
    pComputer.innerHTML = '0'
    pHuman.innerHTML = '0'
    humanCount = 0;
    computerCount = 0;
    finalScore.innerHTML = '';


}

function paper() {
    game(paperButton.value, computer());
}

function rock() {
    game(rockButton.value, computer())
}

function scissor() {
    {
        game(scissorButton.value, computer())
    }
}