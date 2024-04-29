console.log("Today we are going to play Rock Papers Scissors")

function    compChoices() {
    let computer = ["rock", "paper", "scissors"];
    let random = computer[Math.floor(Math.random() * computer.length)];
    return random;
}

function    playerChoices() {
    let p1Choice=prompt(" What is your choice?");
    
    p1Choice = p1Choice.toLowerCase();
    return p1Choice;
}

function playRound(playerChoice, compChoice){
    if (playerChoice == compChoice){
        return "tie";
    } else if(playerChoice == "rock" && compChoice == "scissors"){
        return "rock smashes scissors, player wins";
    } else if(playerChoice == "rock" && compChoice == "paper"){
        return "paper covers rock, comp wins";
    } else if(playerChoice == "paper" && compChoice == "scissors"){
        return "scisors cuts paper, comp wins";
    } else if(playerChoice == "paper" && compChoice == "rock"){
        return "paper covers rock, player wins";
    } else if(playerChoice == "scissors" && compChoice == "paper"){
        return "scissors cuts paper, player wins";
    } else if(playerChoice == "scissors" && compChoice == "rock"){
        return "rock smashes scissors, comp wins";
    }
}


let p1Score = 0;
let compScore = 0;
for(let i = 0; i <= 15; i++) {
    let gameResult = playGame();
    console.log(gameResult);
    if (gameResult.includes("Congratulations") || gameResult.includes("Ohhh")) {
        break;
    }
}

function playGame() {
    let playerChoice = playerChoices();
    let compChoice = compChoices();
    let result = playRound(playerChoice, compChoice);

    if (result.includes("player wins")) {
        p1Score++;
    } else if (result.includes("comp wins")) {
        compScore++;
    }

    console.log("Player Score: " + p1Score + " | Computer Score: " + compScore);

    if (p1Score === 3) {
        return "Congratulations! You won with " + p1Score + " points, while the computer only had " + compScore + " points.";
    } else if (compScore === 3) {
        return " Ohhh! I'm sorry, the computer won this game with " + compScore + " points while you only had " + p1Score + " points.";
    } else {
        return result;
    }
}