let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const myScore = document.querySelector("#user-score");
const coScore = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was DRAW..");
    msg.innerText = "GAME DRAW, PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin) {
        console.log("YOU WIN");
        msg.innerText = "YOU WIN";
        msg.style.backgroundColor = "green";
        userScore++;
    } else{
        console.log("YOU LOSE");
        msg.innerText = "YOU LOOSE";
        msg.style.backgroundColor = "red";
        compScore++;
    }
    displayScore();
}

const playGame = (choiceId) => {
    console.log("User choice =", choiceId);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(choiceId === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if(choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(choiceId === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
         else if (choiceId === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceId, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        
        playGame(choiceId);

    });
});

const displayScore = () => {
    myScore.innerText = `${userScore}`;
    coScore.innerText = `${compScore}`;
}

