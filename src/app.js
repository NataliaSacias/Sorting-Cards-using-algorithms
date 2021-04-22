/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let figure = ["♥", "♦", "♣", "♠"];
  let character = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let figureRandom = figure[Math.floor(Math.random() * figure.length)];
  let characterRandom = character[Math.floor(Math.random() * character.length)];

  //   for (let i = 0; i < 1; i++) {
  //     let figure1 = document.querySelector("#figura1");
  //     figure1.innerHTML = `<h1>
  //     ${figure[figureIndex]}</h1>`;
  //     document.querySelector("#numero").innerHTML = `<h1>
  //             ${character[charactertIndex]}</h1>`;
  //     document.querySelector("#figura2").innerHTML = `<h1>
  //             ${figure[figureIndex]}</h1>`;
  //   }

  document.querySelector("#figura1").innerHTML = `${figureRandom}`;
  document.querySelector("#numero").innerHTML = `${characterRandom}`;
  document.querySelector("#figura2").innerHTML = `${figureRandom}`;

  // if (figureRandom == "♥" || figureRandom == "♦") {
  //   figure1.style.color = "red";
  //}
};
