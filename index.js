var randomNumber1 = (Math.random()*6) + 1 ;
var randomInteger1 = Math.floor(randomNumber1);
// console.log(randomInteger);
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomInteger1+".png");

var randomNumber2 = (Math.random()*6) + 1 ;
var randomInteger2 = Math.floor(randomNumber2);
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomInteger2+".png");


if(randomInteger1>randomInteger2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomInteger1<randomInteger2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(randomInteger1==randomInteger2){
  document.querySelector("h1").innerHTML = "Draw!";
}
