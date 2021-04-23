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

  const principal = document.getElementById("principal");

  const pintarCarta = () => {
    principal.innerHTML = `
            <div class ="col-3">
                <div id="figura1" class="card-body bg-secondary d-flex justify-content-start">${figureRandom}</div>
                <div id="numero" class="card-body bg-secondary d-flex align-items-center d-flex justify-content-center pt-5">${characterRandom}</div>
                <div id="figura2" class="card-body bg-secondary d-flex justify-content-start rotate">${figureRandom}</div>
            </div>`;
    if (figureRandom === "♥" || figureRandom === "♦") {
      principal.style.color = "red";
    } else {
      principal.style.color = "black";
    }
  };
  pintarCarta();
};
