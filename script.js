var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

// function populate game choices
window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
};

function startNewGame(){
    document.getElementById("reset").click = yourScore = 0;

}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random choices for oppponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if (you == opponent) {
        yourScore += 0;
        opponentScore += 0;

    }

    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}