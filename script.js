let computerScore=0;
let humanScore=0;
let buttonContainer = document.querySelector("span");
let container = document.querySelector("div");
let secondContainer = document.querySelector(".second_container")
let startButton = document.querySelector(".lets_start");
startButton.addEventListener("click", (e) =>{
    e.preventDefault();
    playGame();
    buttonContainer.innerHTML="";
}); 
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
function actualPlayRound(){
   
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    container.append(button1);
    container.append(button2);
    container.append(button3);
    button1.textContent="rock";
    button2.textContent="paper";
    button3.textContent="scissors";
     button1.addEventListener("click",(e)=>{
            e.preventDefault();
            playRound(button1.textContent,computerChoice());
        });

    button2.addEventListener("click",(e)=>{
            e.preventDefault();
            playRound(button2.textContent,computerChoice());
        })
    button3.addEventListener("click",(e)=>{
            e.preventDefault();
            playRound(button3.textContent,computerChoice());
        })
   

}
function playRound(human , computer){
    secondContainer.innerHTML="";
    if(human.charAt(0)===computer.charAt(0)){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Round tied !");
        
    }
    else if (human==="rock" && computer==="scissors"){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Rock beats Scissors. Round won by human");
        humanScore++;
    }
    else if (human==="rock" && computer==="paper"){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Paper beats rock . Round won by computer");
        computerScore++;
    }
    else if (human==="paper" && computer==="scissors"){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Scissors beat paper . Round won by computer");
        computerScore++;
    }
    else if (human==="paper" && computer==="rock"){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Paper beats rock . Round won by human");
         humanScore++;
    }
    else if (human==="scissors" && computer==="paper"){
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Scissors beat paper . Round won by human");
        humanScore++;
    }
    else if (human==="scissors" && computer==="rock"){
        
        converter("You chose : " + human);
        converter("Computer chose : " + computer);
        converter("Rock beats Scissors . Round won by computer");
        computerScore++;
    }
    converter(`Scores → You: ${humanScore}, Computer: ${computerScore}`);

    converter("*********");
    converter("*********");

     if (humanScore === 5 || computerScore === 5) {
    decideWinner(humanScore, computerScore);
    container.innerHTML="";
    
  }


}
function decideWinner(a,b){
    if(a>b){
        converter("You won !");
        
        
    }
    else if (a<b){
        converter("You Lost ! Computer won ");
        
    }
    else{
        converter("Math tied");
    }

}
function playGame(){
    let para = document.createElement("p");
    container.appendChild(para);
    para.textContent="Lets start the game ! "
    actualPlayRound();
}
 function converter(string){
    let para = document.createElement("p");
    secondContainer.appendChild(para);
    para.textContent=string;
 }









