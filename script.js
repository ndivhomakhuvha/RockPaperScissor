//Declaring all variables that i will use
let pHuman = document.querySelector('.humanScore')
let pComputer = document.querySelector('.computerScore')
let finalScore = document.querySelector('.finalScore')
let restartButton = document.querySelector('.restart')
let year = document.querySelector('.year')
let currentYear = new Date();
year.innerHTML = currentYear.getFullYear();


let humanCount = 0;
let computerCount = 0;

let paperButton = document.querySelector('.paper')
let rockButton = document.querySelector('.rock')
let scissorButton = document.querySelector('.scissor')

//Computer play function

function computer() {
    let arr = ['rock', 'paper', 'scissor'];
    let arrRandom = Math.floor(Math.random() * arr.length);
    return arr[arrRandom];
}


//Game function
function game(humanChoice, computerChoice) {

    if ((humanChoice == 'rock' && computerChoice == 'scissor') ||
        (humanChoice == 'scissor' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanCount++;

        pHuman.innerHTML = humanCount;
        finalScore.innerHTML = `Human  Wins , Human : "${humanChoice}" over Computer : "${computerChoice}"`
        if (humanCount == 5) {
            finalScore.innerHTML = 'Human won the match 🎉'
            paperButton.disabled = true;
            rockButton.disabled = true;
            scissorButton.disabled = true;

        }

    } else if (humanChoice == computerChoice) {
        finalScore.innerHTML = `Its a tie 👔 , Human : "${humanChoice}" & Computer : "${computerChoice}"`;
    } else {
        finalScore.innerHTML = ''
        computerCount++;
        pComputer.innerHTML = computerCount;

        finalScore.innerHTML = `Computer Wins , Computer :  "${computerChoice}" over Human : "${humanChoice}"`
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