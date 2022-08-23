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
let currentWin = document.querySelector('.currentWinner')
let year = document.querySelector('.year')
let currentYear = new Date();
year.innerHTML = currentYear.getFullYear();
humanName.innerHTML = 'You'

let name = prompt('What is your name?')

let nameLength = name.length;
let newName = name[0].toUpperCase() + name.substring(1, nameLength).toLowerCase();



humanName.innerHTML = newName;
humanDiv.innerHTML = '?';
computerDiv.innerHTML = '?';

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
        currentWin.innerHTML = `${humanChoice} beats ${computerChoice}`
        finalScore.innerHTML = `👤  Wins this round `

        humanDiv.innerHTML = humanChoice;
        computerDiv.innerHTML = computerChoice;
        if (humanCount == 5) {
            finalScore.innerHTML = `${newName} won the match 🎉`
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;

        }

    } else if (humanChoice == computerChoice) {
        computerDiv.innerHTML = computerChoice;
        humanDiv.innerHTML = humanChoice;
        finalScore.innerHTML = `Its a tie 👔 `;
        currentWin.innerHTML = `${humanChoice} is the same as${computerChoice}`
    } else {
        finalScore.innerHTML = ''
        computerCount++;
        currentWin.innerHTML = `${computerChoice} beats ${humanChoice}`
        pComputer.innerHTML = computerCount;
        humanDiv.innerHTML = humanChoice;
        computerDiv.innerHTML = computerChoice;
        finalScore.innerHTML = `💻  Wins this round`
        if (computerCount == 5) {
            finalScore.innerHTML = '💻  won the match 🎉'
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;

        }

    }

}
restartButton.addEventListener('click', newGame)

function newGame() {
    currentWin.innerHTML = ''
    humanName.innerHTML = 'You'
    name = prompt('What is your name?')
    nameLength = name.length;
    newName = name[0].toUpperCase() + name.substring(1, nameLength).toLowerCase();
    humanDiv.innerHTML = '?';
    computerDiv.innerHTML = '?';
    humanName.innerHTML = newName;
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