let cm;
let playerMove = '';
let res = "";

const autoPlayBtn = document.querySelector('.auto-play-btn');
const resetScoreBtn = document.querySelector('.reset-button');
const imgMoveRock = document.querySelector('.js-rock')
const imgMoveScissor = document.querySelector('.js-scissor')
const imgMovePaper = document.querySelector('.js-paper')
document.body.addEventListener('keydown', (event) => {
    console.log('Keydow')
    if (event.key === 'r') {
        playGame('Rock');
    }
    else if (event.key === 'p') {
        playGame('Paper');
    }
    else if (event.key === 's') {
        playGame('Scissor')
    }
});
autoPlayBtn.addEventListener('click', () => {
    autoPlay();
});
resetScoreBtn.addEventListener('click', () => {
    score.wins = 0
    score.loss = 0
    score.ties = 0
    localStorage.removeItem('score')
    updateScoreBoard();
    console.log(`Scores Reseted to 0`);
});

imgMoveRock.addEventListener('click', () => {
    playGame('Rock');
});
imgMoveScissor.addEventListener('click', () => {
    playGame('Scissor');
});
imgMovePaper.addEventListener('click', () => {
    playGame('Paper');
});
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loss: 0,
    ties: 0,
};
// DOM
function updateScoreBoard() {
    document.querySelector('#js-wins').innerHTML = `Wins:${score.wins}`;
    document.querySelector('#js-loss').innerHTML = `Losses:${score.loss}`;
    document.querySelector('#js-ties').innerHTML = `Ties:${score.ties}`;
    updateScoreBoardImage();
};

function updateMove() {
    const elmntplayerMove = document.querySelector('#js-user-move');
    const computerMove = document.querySelector('#js-computer-move');
    const moveInfo = document.getElementById('move-info')
    moveInfo.style.visibility = `visible`
    if (playerMove === 'Rock') {
        elmntplayerMove.setAttribute('src', 'src/rock.png')
    }
    else if (playerMove === 'Scissor') {
        elmntplayerMove.setAttribute('src', 'src/scissors.png')
    }
    else {
        elmntplayerMove.setAttribute('src', 'src/paper.png')
    }
    // computer Move
    if (cm === 'Rock') {
        computerMove.setAttribute('src', 'src/rock.png')
    }
    else if (cm === 'Scissor') {
        computerMove.setAttribute('src', 'src/scissors.png')
    }
    else {
        computerMove.setAttribute('src', 'src/paper.png')
    }
};

function updateScoreBoardImage() {
    const elementImg = document.querySelector('#js-status-image');
    if (res === 'wins') {
        elementImg.setAttribute('src', `src/success.png`);
    }
    else if (res === 'loss') {
        elementImg.setAttribute('src', `src/game-over.png`)
    }
    else if (res === 'Tie') {
        elementImg.setAttribute('src', `src/draw.png`)
    }
};

function computerMove() {
    let computer_mv = "";
    let computer = Math.random();

    if (computer >= 0 && computer < 1 / 3) {
        computer_mv = "Rock";
        console.log(`Computer = Rock`);
    } else if (computer >= 1 / 3 && computer < 2 / 3) {
        console.log(`Computer = Paper`);
        computer_mv = "Paper";
    } else if (computer >= 2 / 3 && computer < 1) {
        console.log(`Computer = Scissor`);
        computer_mv = "Scissor";
    }
    return computer_mv;
}
// Auto-play new added
let flag = false;
let intervalId;
function autoPlay() {
    if (!flag) {
        intervalId = setInterval(() => {
            const playerMove = computerMove()
            playGame(playerMove)
        }, 1000);
        flag = true;
    }
    else {
        flag = false;
        // to stop the interval.
        clearInterval(intervalId);
    }
}
function playGame(playerMv) {
    cm = computerMove();
    playerMove = playerMv;
    updateMove()
    if (playerMove === "Scissor") {
        if (cm === "Rock") {
            res = "loss";
        } else if (cm === "Paper") {
            res = "wins";
        } else if (cm === "Scissor") {
            res = "Tie";
        }
    } else if (playerMove === "Rock") {
        if (cm === "Paper") {
            res = "loss";
        } else if (cm === "Scissor") {
            res = "wins";
        } else if (cm === "Rock") {
            res = "Tie";
        }
    } else if (playerMove == "Paper") {
        if (cm === "Scissor") {
            res = "loss";
        } else if (cm === "Rock") {
            res = "wins";
        } else if (cm === "Paper") {
            res = "Tie";
        }
    }
    // calculating the overall res
    if (res === "wins") {
        score["wins"] += 1;
    } else if (res === "loss") {
      
        score["loss"] += 1;
    } else {
        score["ties"] += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));
    updateScoreBoard();
    updateMove();
    updateScoreBoardImage(); 
}
updateScoreBoard()
