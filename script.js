const computerPlay = () => {
    let x = Math.random() * 10;
    if (x <= 3.3) {
        return "rock"
    }
    if (x > 3.3 && x <= 6.6) {
        return "paper"
    } else {
        return "scissors"
    }
}
const playRound = (playerSelection, computerSelection) => {
    let tie = "It's a tie both selected " + playerSelection;
    let win = "You win this round! " + playerSelection + " beats " + computerSelection;
    let lose = "You lose this round! " + computerSelection + " beats " + playerSelection;

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "paper":
                return lose;
            case "scissors":
                return win;
            default:
                return tie;
        }
    }
    else if (playerSelection == "paper") {

        switch (computerSelection) {
            case "scissors":
                return lose;
            case "rock":
                return win;
            default:
                return tie;
        }
    }
    else {
        switch (computerSelection) {
            case "rock":
                return lose;
            case "paper":
                return win;
            default:
                return tie;
        }
    }
}
const game = (playerSelection) => {
        let round = playRound(playerSelection, computerPlay());
        if (round.slice(4, 7) == "win") winCount++;
        else if (round.slice(0, 1) == "I") tieCount++;
        else loseCount++;
        console.log(round);
        console.log(winCount);
        return round;
}
const btns = document.querySelectorAll(".btn");
const actualRound = document.querySelector(".actualRound");
const count = document.querySelector(".count");
const result = document.querySelector(".result");
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

btns.forEach(btn => btn.addEventListener("click",()=>{
    actualRound.textContent = game(btn.id);
    count.textContent = `Wins: ${winCount} Ties: ${tieCount} Losses: ${loseCount}`;
    if(winCount>2 || loseCount>2){
        if(winCount>loseCount) result.textContent = "You won";
        else result.textContent = "You lost";
        winCount = 0;
        tieCount = 0;
        loseCount = 0;
    }
    else result.textContent = "";
}))