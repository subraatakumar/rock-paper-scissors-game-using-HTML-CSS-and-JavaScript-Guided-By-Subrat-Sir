// let userChoice = prompt("Enter your choice : ")
let userChoice = "";
let computerChoice = "";
let userScore = document.querySelector("#userScore")
let computerScore = document.querySelector("#computerScore")
let userScoreValue = 0;
let computerScoreValue = 0;
let popUpDiv = document.querySelector(".popUpContainer");
let popUpTitle = document.querySelector(".popUpTitle");
let popUpButton = document.querySelector(".popUpButton");
let gameMsg = document.querySelector("#gameMsg");
let gameMsg1 = document.querySelector("#gameMsg1")

popUpButton.addEventListener("click",(event) => {
    //alert("You clicked!");
    userScoreValue = 0;
    userScore.textContent = `Score : ${userScoreValue}`;
    computerScoreValue = 0;   
    computerScore.textContent = `Score : ${computerScoreValue}`; 
    document.querySelector("#userSelected").textContent = "?";
    document.querySelector("#computerSelected").textContent = "?";
    gameMsg.textContent = "Choose Your Weapon"
    gameMsg1.textContent = "First Score 5 Will win the game";
    popUpDiv.classList.toggle("inActive")
});

let rock = document.querySelector("#rock");
rock.addEventListener("click", (event) =>{
    userChoice = "rock";
    document.querySelector("#userSelected").textContent = "✊";
    console.log(userChoice);
    GameCalculation();
})

let paper = document.querySelector("#paper");
paper.addEventListener("click", (event) =>{
    userChoice = "paper";
    document.querySelector("#userSelected").textContent = "✋";
    GameCalculation();
})

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", (event) =>{
    userChoice = "scissors";
    document.querySelector("#userSelected").textContent = "✌";
    console.log(userChoice);
    GameCalculation();
})

function GameCalculation(){
    let computerChoices = ["rock","paper","scissors"];
    let randomNo = Math.trunc(Math.random()*3);
    computerChoice = computerChoices[randomNo];
    displayComputerChoice();
    console.log("User Choice : "+ userChoice)
    console.log("Computer Choice : "+computerChoice)
    if(userChoice == computerChoice){
        gameMsg.textContent = "It's a Tie!"
        gameMsg1.textContent = " ";
        console.log("It's a Tie.")
    }else if((userChoice == "paper" && computerChoice == "rock") 
         || (userChoice == "rock" && computerChoice == "scissors")
         || (userChoice == "scissors" && computerChoice == "paper")){
        console.log("User Wins!");
        gameMsg.textContent = "Use Wins!"
        gameMsg1.textContent = userChoice + " bits " + computerChoice;
        userScoreValue = userScoreValue + 1;
        userScore.textContent = `Score : ${userScoreValue}`;
        checkWinner()
    }else {
        console.log("Computer Wins!")
        gameMsg.textContent = "Computer Wins!"
        gameMsg1.textContent = computerChoice + " bits " + userChoice;
        computerScoreValue = computerScoreValue + 1
        computerScore.textContent = `Score : ${computerScoreValue}`;
        checkWinner()
    }    
}

function checkWinner(){
    if(userScoreValue >= 5){
        popUpTitle.textContent = "User Wins!";
        finishGame();
    }
    if(computerScoreValue >= 5){
        popUpTitle.textContent = "Computer Wins!";
        finishGame();
    }
}

function finishGame(){
    popUpDiv.classList.toggle("inActive");
    console.log("Game Finished!")
}

function displayComputerChoice(){
    if(computerChoice == "rock")
        document.querySelector("#computerSelected").textContent = "✊";    
    if(computerChoice == "paper")
        document.querySelector("#computerSelected").textContent = "✋";    
    if(computerChoice == "scissors")
        document.querySelector("#computerSelected").textContent = "✌";    
}
