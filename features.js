 function game(){
  var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var random1=Math.floor(Math.random()*6);
  var random2=Math.floor(Math.random()*6);
  while(random1==random2)
  {
    var random2=Math.floor(Math.random()*6);
  }
  document.getElementById("player1img").src=images[random1];
  document.getElementById("player2img").src=images[random2];
  if(random1>random2)
  document.getElementById("result-text").innerHTML="Player 1 WINS!!";
  else
  document.getElementById("result-text").innerHTML="Player 2 WINS!!";
}
