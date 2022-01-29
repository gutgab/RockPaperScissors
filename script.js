const computerPlay =()=>{
    let x = Math.random()*10;
    if (x<=3.3) {
        return "rock"
    }
    if (x>3.3 && x<=6.6) {
        return "paper"
    } else {
        return "scissors"
    }
}
const playRound = (playerSelection,computerSelection)=>{
    playerSelection.toLowerCase();
    let tie = "It's a tie both selected " + playerSelection;
    let win = "You win! " + playerSelection + " beats " + computerSelection;
    let lose = "You lose! " + computerSelection + " beats " + playerSelection;

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
    else{
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

const game = ()=>{
    let count = 0;
    for (let index = 0; index <= 4; index++) {
        let playerSelection = prompt("Select rock, paper or scissors");
        if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper") {
            let round = playRound(playerSelection,computerPlay());
            if(round.slice(4,7) == "win") count++;
            if(round.slice(0,1) == "I") index--;
            console.log(round);
        }
        else{
            index--;
            alert("Select a valid option");
        }
    }
    return `You win ${count} of 5 games`;
}
console.log(game());
