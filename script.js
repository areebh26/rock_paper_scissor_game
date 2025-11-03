let computerSore=0;
let humanScore=0;
function computerChoice(){
    let x=Math.floor(Math.random()*(3-1+1)+1);
    if(x===1){
        return "rock";
    }
    else if (x===2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function humanChoice(){
    let answer = prompt("Enter your choice (rock/paper/scissors) : ");
    answer = answer.toLowerCase();
    return answer;
}
function playRound(human , computer){
    if(human.charAt(0)===computer.charAt(0)){
        console.log("Round tied !");
    }
    else if (human==="rock" && computer==="scissors"){
        console.log("Rock beats Scissors. Round won by human");
        humanScore++;
    }
    else if (human==="rock" && computer==="papaer"){
        console.log("Paper beats rock . Round won by computer");
        computerSore++;
    }
    else if (human==="paper" && computer==="scissors"){
        console.log("Scissors beat paper . Round won by computer");
        computerSore++;
    }
    else if (human==="paper" && computer==="rock"){
        console.log("Paper beats rock . Round won by human");
        humanScore++;
    }
    else if (human==="scissors" && computer==="paper"){
        console.log("Scissors beat paper . Round won by human");
        humanScore++;
    }
    else if (human==="scissors" && computer==="rock"){
        console.log("Rock beats Scissors . Round won by computer");
        computerSore++;
    }


}








