let humanCount = 0;
let computerCount = 0;

const paperButton = document.querySelector('.paper');
const rockButton = document.querySelector('.rock');
const scissorButton = document.querySelector('.scissor');
const pHuman = document.querySelector('.humanScore');
const pComputer = document.querySelector('.computerScore');
const finalScore = document.querySelector('.finalScore');
const restartButton = document.querySelector('.restart');
const humanName = document.querySelector('.humanName');
const humanDiv = document.querySelector('.humanDiv');
const computerDiv = document.querySelector('.ComputerDiv');
const currentWin = document.querySelector('.currentWinner');
restartButton.style.display = 'none';
humanName.textContent = 'You';
let nameLength;
let newName;
let names;
Swal.fire({
  title: 'Enter your name',
  input: 'text',
  confirmButtonText: 'Continue',
}).then((result) => {
  if (result.value) {
    names = result.value;
    nameLength = names.length;
    newName = names[0].toUpperCase() + names.substring(1, nameLength).toLowerCase();
    humanName.textContent = newName;
    humanDiv.textContent = '?';
    computerDiv.textContent = '?';
  }
});

// Computer play function

function computer() {
  const arr = ['👊🏿', '📄', '✌🏿'];
  const arrRandom = Math.floor(Math.random() * arr.length);
  return arr[arrRandom];
}
function Winning() {
  paperButton.disabled = true;
  rockButton.disabled = true;
  scissorButton.disabled = true;
  paperButton.style.display = 'none';
  rockButton.style.display = 'none';
  scissorButton.style.display = 'none';
  restartButton.style.display = 'block';
}

// Game function
function game(humanChoice, computerChoice) {
  if ((humanChoice === '👊🏿' && computerChoice === '✌🏿')
        || (humanChoice === '✌🏿' && computerChoice === '📄')
        || (humanChoice === '📄' && computerChoice === '👊🏿')) {
    humanCount += 1;

    pHuman.textContent = humanCount;
    currentWin.textContent = `${humanChoice} beats ${computerChoice}`;
    finalScore.textContent = '👤  Wins this round ';

    humanDiv.textContent = humanChoice;
    computerDiv.textContent = computerChoice;
    if (humanCount === 5) {
      finalScore.textContent = `${newName} won the match 🎉`;
      Winning();
    }
  } else if (humanChoice === computerChoice) {
    computerDiv.textContent = computerChoice;
    humanDiv.textContent = humanChoice;
    finalScore.textContent = 'Its a tie 👔 ';
    navigator.vibrate([1000, 1000]);
    currentWin.textContent = `${humanChoice} is the same as${computerChoice}`;
  } else {
    finalScore.textContent = '';
    computerCount += 1;
    navigator.vibrate([1000]);
    currentWin.textContent = `${computerChoice} beats ${humanChoice}`;
    pComputer.textContent = computerCount;
    humanDiv.textContent = humanChoice;
    computerDiv.textContent = computerChoice;
    finalScore.textContent = '💻  Wins this round';
    if (computerCount === 5) {
      finalScore.textContent = '💻  won the match 🎉';
      Winning();
    }
  }
}
function newGame() {
  paperButton.style.display = 'block';
  rockButton.style.display = 'block';
  scissorButton.style.display = 'block';
  currentWin.textContent = '';

  restartButton.style.display = 'none';
  humanName.textContent = 'You';
  Swal.fire({
    title: 'Enter your name',
    input: 'text',
    confirmButtonText: 'Continue',
  }).then((result) => {
    if (result.value) {
      names = result.value;
      nameLength = names.length;
      newName = names[0].toUpperCase() + names.substring(1, nameLength).toLowerCase();
      humanName.textContent = newName;
      humanDiv.textContent = '?';
      computerDiv.textContent = '?';
    }
  });

  humanDiv.textContent = '?';
  computerDiv.textContent = '?';
  currentWin.textContent = "Let's go again ";
  humanName.textContent = newName;
  paperButton.disabled = false;
  rockButton.disabled = false;
  scissorButton.disabled = false;
  pComputer.textContent = '0';
  pHuman.textContent = '0';
  humanCount = 0;
  computerCount = 0;
  finalScore.textContent = '';
}

function Paper() {
  game(paperButton.value, computer());
}

function Rock() {
  game(rockButton.value, computer());
}

function Scissor() {
  game(scissorButton.value, computer());
}

restartButton.addEventListener('click', newGame);
rockButton.addEventListener('click', Rock);
paperButton.addEventListener('click', Paper);
scissorButton.addEventListener('click', Scissor);
