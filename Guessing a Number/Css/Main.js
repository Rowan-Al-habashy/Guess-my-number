// document.querySelector(".message").textContent = "Correct Value";

// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 30;

var secretNmb = Math.trunc(Math.random() * 20)+1;
var score = 20;
var hightscore=0;
document.querySelector(".number").textContent = '?';

document.querySelector(".button1").addEventListener("click", function () {
  const fi = document.querySelector(".outline").value;
  if (!fi) {
    document.querySelector(".message").textContent = "No Number";
    document.querySelector(".number").textContent = 0;
    document.querySelector(".score").textContent = 0;
  } else if (fi ==secretNmb) {
    document.querySelector(".message").textContent = "Correct Value";
    document.querySelector(".number").textContent = secretNmb;
    document.querySelector("body").style.backgroundColor = "green";
  
    if(score>hightscore){
    hightscore=score;
    document.querySelector('.score2').textContent=hightscore;
  }
}
   else if (fi >secretNmb) {
    document.querySelector(".message").textContent = "Too High";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "gra";
  }
  else if (fi < secretNmb) {
    document.querySelector(".message").textContent = "Too Low";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "blue";
  } else {
      document.querySelector(".message").textContent = "You Lose The game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    } 
});

document.querySelector(".Again").addEventListener("click", function () {
   score = 20;
   secretNmb = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".outline").value='';

  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
