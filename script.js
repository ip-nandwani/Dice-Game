let rn1 = Math.floor(Math.random() * 6) + 1;
console.log(rn1);
let leftImg = document.querySelectorAll("img")[0];
leftImg.setAttribute("src", "./images/dice" + rn1 + ".png");

rn2 = Math.floor(Math.random() * 6) + 1;
console.log(rn2);
let rightImg = document.querySelectorAll("img")[1];
rightImg.setAttribute("src", "./images/dice" + rn2 + ".png");

if (rn1 > rn2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (rn1 < rn2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// let h1 = document.querySelector("h1");
// let leftImg = document.querySelectorAll("img")[0];
// let rightImg = document.querySelectorAll("img")[1];

// function rollDice() {
//   let rn1 = Math.floor(Math.random() * 6) + 1;
//   let rn2 = Math.floor(Math.random() * 6) + 1;

//   leftImg.setAttribute("src", "./images/dice" + rn1 + ".png");
//   rightImg.setAttribute("src", "./images/dice" + rn2 + ".png");

//   if (rn1 > rn2) {
//     h1.innerHTML = "🚩 Player 1 Wins!";
//   } else if (rn1 < rn2) {
//     h1.innerHTML = "Player 2 Wins! 🚩";
//   } else {
//     h1.innerHTML = "Draw!";
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   h1.innerHTML = "Refresh Me";
// });

// document.querySelector("button").addEventListener("click", rollDice);
