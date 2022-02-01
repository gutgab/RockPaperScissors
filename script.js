const btns = document.querySelectorAll(".btn");
const actualRound = document.querySelector(".actualRound");
const count = document.querySelector(".count");
const result = document.querySelector(".result");
const visual = document.querySelector(".visual");
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

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
    let cpu = computerPlay();
    let round = playRound(playerSelection, cpu);
    if (round.slice(4, 7) == "win") winCount++;
    else if (round.slice(0, 1) == "I") tieCount++;
    else loseCount++;
    return [round, cpu];
}

btns.forEach(btn => btn.addEventListener("click", () => {
    const img1 = document.createElement("IMG");
    const img2 = document.createElement("IMG");
    const vs = document.createElement("h3");
    const newGame = game(btn.id);
    const playerChoice = btn.id;
    const cpuChoice = newGame[1];
    vs.textContent = "VS";
    img1.src = `assets/${playerChoice}.png`;
    img2.src = `assets/${cpuChoice}.png`;
    while(visual.lastChild){visual.removeChild(visual.lastChild)}
    visual.appendChild(img1);
    visual.appendChild(vs);
    visual.appendChild(img2);
    actualRound.textContent = newGame[0];
    if (newGame[0].slice(4, 7) == "win") {img1.classList.add("won");img2.classList.add("lost");}
    else if (newGame[0].slice(0, 1) == "I") {img1.classList.add("tied");img2.classList.add("tied");}
    else {img1.classList.add("lost");img2.classList.add("won");}
    count.textContent = `Wins: ${winCount}   Ties: ${tieCount}   Losses: ${loseCount}`;
    if (winCount > 2 || loseCount > 2) {
        if (winCount > loseCount) result.textContent = "You won";
        else result.textContent = "You lost";
        winCount = 0;
        tieCount = 0;
        loseCount = 0;
    }
    else result.textContent = "";
}))