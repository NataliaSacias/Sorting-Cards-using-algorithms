/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //let figure = ["♥", "♦", "♣", "♠"];
  let figure = ["♣️", "♠️", "♦️", "♥️"];
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

  const principal = document.getElementById("principal"); // div que contiene las cartas
  let mostrarCarta = document.querySelector("#mostrar-carta"); //boton mostrar carta
  let cantidad = document.querySelector("#cantidad");

  const pintarCartas = () => {
    for (let i = 0; i < cantidad.value; i++) {
      let figureRandom = figure[Math.floor(Math.random() * figure.length)];
      let characterRandom =
        character[Math.floor(Math.random() * character.length)];
      principal.innerHTML += `
            <div class="m-6 col-2 carta">
                <div id="figura1" class="card-body d-flex justify-content-start">${figureRandom}</div>
                <div id="numero" class="card-body d-flex align-items-center d-flex justify-content-center pt-5 display-3">${characterRandom}</div>
                <div id="figura2" class="card-body d-flex justify-content-start rotate">${figureRandom}</div>
            </div>`;
      //   if (figureRandom === "♥" || figureRandom === "♦") {
      //     principal.style.color = "red";
      //   } else {
      //     principal.style.color = "black";
      //   }
      twemoji.parse(document.body);
    }
  };

  mostrarCarta.addEventListener("click", () => {
    principal.innerHTML = "";
    pintarCartas();
  });
};
