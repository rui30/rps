function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getPlayerChoice() {
    let choice;
    
    while (1) {
        choice = prompt("Please input your selection (rock, paper, scissors, or quit): ");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors" || choice == "quit") {
            return choice;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection == computerSelection) {
        result = "tie";
    } else {
        switch (playerSelection) {
            case "rock":
            result = (computerSelection == "paper") ? "lose" : "win";
            break;
            case "paper":
            result = (computerSelection == "scissors") ? "lose" : "win";
            break;
            case "scissors":
            result = (computerSelection == "rock") ? "lose" : "win";
            break;
        }
    }

    return result;
}

function game() {
    let ps, cs, result, playerScore = 0, computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        ps = getPlayerChoice();

        if (ps == "quit") {
            return "terminated."
        }
        
        cs = getComputerChoice();
        result = playRound(ps, cs);

        if (result == "win") {
            playerScore++;
        }

        if (result == "lose") {
            computerScore++;
        }

        console.log("Round " + i.toString() +
                    " : You -> " + ps +
                    " PC -> " + cs +
                    " Result: " + result);
    }

    console.log("Your score: " + playerScore.toString() +
                ", PC Score: " + computerScore.toString());
}
