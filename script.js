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
restartButton.style.display = 'none'

humanName.textContent = 'You'

let name = prompt('What is your name?')


let nameLength = name.length;
let newName = name[0].toUpperCase() + name.substring(1, nameLength).toLowerCase();


humanName.textContent = newName;
humanDiv.textContent = '?';
computerDiv.textContent = '?';

//Computer play function

function computer() {
    let arr = ['👊🏿', '📄', '✌🏿'];
    let arrRandom = Math.floor(Math.random() * arr.length);
    return arr[arrRandom];
}


//Game function
function game(humanChoice, computerChoice) {

    if ((humanChoice == '👊🏿' && computerChoice == '✌🏿') ||
        (humanChoice == '✌🏿' && computerChoice == '📄') ||
        (humanChoice == '📄' && computerChoice == '👊🏿')) {
        humanCount++;

        pHuman.textContent = humanCount;
        currentWin.textContent = `${humanChoice} beats ${computerChoice}`
        finalScore.textContent = `👤  Wins this round `

        humanDiv.textContent = humanChoice;
        computerDiv.textContent = computerChoice;
        if (humanCount == 5) {
            finalScore.textContent = `${newName} won the match 🎉`
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;
            paperButton.style.display = 'none'
            rockButton.style.display = 'none'
            scissorButton.style.display = 'none'
            restartButton.style.display = 'block';


        }

    } else if (humanChoice == computerChoice) {
        computerDiv.textContent = computerChoice;
        humanDiv.textContent = humanChoice;
        finalScore.textContent = `Its a tie 👔 `;
        navigator.vibrate([200,200]);
        currentWin.textContent = `${humanChoice} is the same as${computerChoice}`
    } else {
        finalScore.textContent = ''
        computerCount++;
        navigator.vibrate([200]);
        currentWin.textContent = `${computerChoice} beats ${humanChoice}`
        pComputer.textContent = computerCount;
        humanDiv.textContent = humanChoice;
        computerDiv.textContent = computerChoice;
        finalScore.textContent = `💻  Wins this round`
        if (computerCount == 5) {
            finalScore.textContent = '💻  won the match 🎉'
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;
            paperButton.style.display = 'none'
            rockButton.style.display = 'none'
            scissorButton.style.display = 'none'
            restartButton.style.display = 'block';

        }

    }

}
restartButton.addEventListener('click', newGame)

function newGame() {

    paperButton.style.display = 'block'
    rockButton.style.display = 'block'
    scissorButton.style.display = 'block'
    currentWin.textContent = ''

    restartButton.style.display = 'none'
    humanName.textContent = 'You'
    name = prompt('What is your name?')
    nameLength = name.length;
    newName = name[0].toUpperCase() + name.substring(1, nameLength).toLowerCase();
    humanDiv.textContent = '?';
    computerDiv.textContent = '?';
    currentWin.textContent = "Let's go again ";
    humanName.textContent = newName;
    paperButton.disabled = false;
    rockButton.disabled = false;
    scissorButton.disabled = false;
    pComputer.textContent = '0'
    pHuman.textContent = '0'
    humanCount = 0;
    computerCount = 0;
    finalScore.textContent = '';
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