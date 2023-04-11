let player={
    name:"per",
    chips:150
}
let cards=[];


let sum=0;
let hasblackjack=false;
let isAlive=false;
let gamestarted=true;
let message=" ";
let messageEl=document.getElementById("welcome_el");
let sumEl=document.getElementById("sum_el");
let cardEl=document.getElementById("cards_el");
let playerEL=document.getElementById("player_el");
playerEL.textContent=player.name+ " " +"$"+player.chips;

function getRandomcard(){
    let random= Math.floor(Math.random()*13)+1;
    if(random>10){
        return 10;
    }
        else if(random==1){
            
        return 11;
    }
    else{
        return random;
    }
}
function startgame(){
    if(gamestarted){
   let firstCard=getRandomcard();
   let secondCard=getRandomcard();
   cards=[firstCard,secondCard];
   sum=firstCard+secondCard;
   
   isAlive=true;
   renderGame();
   gamestarted=false;
}
renderGame();
}
   
   




function renderGame(){
sumEl.textContent="SUM: " +sum;
cardEl.textContent="CARDS:" ;
for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i] + " "
}
if(sum<=20){
    message="do you want to draw another card? ";
}
else if(sum===21){
    message=" you've got a blackjack " ;
    hasblackjack=true;
}else{
   message="you're out of the game ";
    isAlive=false;
}
messageEl.textContent=message;



}
function newcard(){
    
    if(isAlive==true && hasblackjack==false){
  let card=getRandomcard();
  sum+=card;
  cards.push(card);
  renderGame();
    }
}