let computerSore=0;
let humanScore=0;
playGame();
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
function playRound(human=humanChoice() , computer=computerChoice()){
    if(human.charAt(0)===computer.charAt(0)){
        console.log("You chose : " + human);
        
        console.log("Computer chose : " + computer);
        
        console.log("Round tied !");
    }
    else if (human==="rock" && computer==="scissors"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Rock beats Scissors. Round won by human");
        humanScore++;
    }
    else if (human==="rock" && computer==="paper"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Paper beats rock . Round won by computer");
        computerSore++;
    }
    else if (human==="paper" && computer==="scissors"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Scissors beat paper . Round won by computer");
        computerSore++;
    }
    else if (human==="paper" && computer==="rock"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Paper beats rock . Round won by human");
        humanScore++;
    }
    else if (human==="scissors" && computer==="paper"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Scissors beat paper . Round won by human");
        humanScore++;
    }
    else if (human==="scissors" && computer==="rock"){
        console.log("You chose : " + human);
        console.log("Computer chose : " + computer);
        console.log("Rock beats Scissors . Round won by computer");
        computerSore++;
    }


}
function decideWinner(a,b){
    if(a>b){
        console.log("You won !");
        
    }
    else if (a<b){
        console.log("You Lost ! Computer won ");
        
    }
    else{
        console.log("Math tied");
    }

}
function playGame(){
    console.log("Lets start the game ! ");
    playRound();
    console.log("********");
    console.log("********");
    
    
    playRound();
     console.log("********");
    console.log("********");
    playRound();
     console.log("********");
    console.log("********");
    playRound();
     console.log("********");
    console.log("********");
    playRound();
     console.log("********");
    console.log("********");
    decideWinner(humanScore,computerSore);
    
}








