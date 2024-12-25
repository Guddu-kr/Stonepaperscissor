let userScore = 0;//initialize with 0 user score
let compScore = 0;//initialize with 0 computer score

const choices = document.querySelectorAll(".choice");//use to select and retrieve 

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");



//it will generate the choice of computer
const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    //rock,paper,scissors
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    

};

//for computer choice
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate computer choice -> modular;
    const compChoice = getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            //rock,scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//for user choice
choices.forEach((choice) => {
    //console.log(choice);
    //handles click events on set of choices
    choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id");//it will give id of that choice to console
            console.log("choice was clicked",userChoice);
            playGame(userChoice);

    });
});

