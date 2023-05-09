//player 1
var player1 = Math.floor(Math.random() * 6) + 1;
var firstDiceImage = "images/dice" + player1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//player 2
var player2 = Math.floor(Math.random() * 6) + 1;
var secondDiceImage = "images/dice" + player2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//return
if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

//Refresh
var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function () {
  location.reload();
});

//Shake Effect to make page look a bit animated
var elements = document.getElementsByClassName("dice");

function shakeElements() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("shake");
    setTimeout(function () {
      elements[i].classList.remove("shake");
    }, 500); // Adjust the delay (in milliseconds) as needed
  }
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", shakeElements);
}
