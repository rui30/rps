let gameCurrentCount = 0;
let humanCurrentScore = 0;
let robotCurrentScore = 0;

let humanScore = document.querySelector(".number.human");
let robotScore = document.querySelector(".number.robot");
let humanPattern = document.querySelector(".pattern.human");
let robotPattern = document.querySelector(".pattern.robot");
let gameResult = document.querySelector(".game-result");
let gameCount = document.querySelector(".game-count");

// rock, paper, and scissors buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", playRound);
})

// reset button
document.querySelector("#reset").addEventListener("click", gameReset);

function getRobotChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(event) {
    let result;
    let robotPattern = getRobotChoice();
    
    if (robotPattern == event.target.id) {
        result = "draw";
    } else {
        switch (event.target.id) {
            case "rock":
            result = (robotPattern == "paper") ? "lose" : "win";
            break;
            case "paper":
            result = (robotPattern == "scissors") ? "lose" : "win";
            break;
            case "scissors":
            result = (robotPattern == "rock") ? "lose" : "win";
            break;
        }
    }
    
    updatePattern(event.target.id, robotPattern);
    updateScore(result);
}

function updatePattern(human, robot) {
    humanPattern.textContent = human;
    robotPattern.textContent = robot;
}

function updateScore(result, robotPattern) {
    switch (result) {
        case "draw":
        gameResult.textContent = "Draw";
        break;
        case "win":
        humanScore.textContent = (++humanCurrentScore).toString();
        gameResult.textContent = "You Win";
        break;
        case "lose":
        robotScore.textContent = (++robotCurrentScore).toString();
        gameResult.textContent = "You Lose"
        break;   
    }
    
    gameCount.textContent = "Game count: " + (++gameCurrentCount).toString();
}

function gameReset() {
    gameCurrentCount = 0;
    humanCurrentScore = 0;
    robotCurrentScore = 0;
    
    humanScore.textContent = "0";
    robotScore.textContent = "0";
    humanPattern.textContent = "";
    robotPattern.textContent = "";
    gameResult.textContent = "";
    gameCount.textContent = "Game count: 0";
}
