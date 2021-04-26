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
  let cantidad = document.querySelector("#cantidad"); //input para la cantidad de cartas

  const pintarCartas = () => {
    let deck = [];
    for (let i = 0; i < cantidad.value; i++) {
      let figureRandom = figure[Math.floor(Math.random() * figure.length)];
      let characterRandom =
        character[Math.floor(Math.random() * character.length)];
      deck.push({ Figura: figureRandom, Character: characterRandom });

      principal.innerHTML += `
      <div class="m-6 col-2 carta" id='carta-completa'>
      <div id="figura1" class="card-body d-flex justify-content-start">${figureRandom}</div>
      <div id="numero" class="card-body d-flex align-items-center d-flex justify-content-center pt-5 display-3">${characterRandom}</div>
      <div id="figura2" class="card-body d-flex justify-content-start rotate">${figureRandom}</div>
      </div>`;

      //evento burbuja aca
      /*
      ordenar deck por burbuja
      y pintar solucion 
      */
      //evento selection aca
      twemoji.parse(document.body);
    }
    console.log(deck[1].Figura);
    const botonBurbuja = document.querySelector("#boton-burbuja");
    botonBurbuja.addEventListener("click", bubbleSort(deck));
  };

  mostrarCarta.addEventListener("click", () => {
    principal.innerHTML = "";
    pintarCartas();

    // var numeroDeCarta = document.querySelectorAll("#carta-completa");

    // numeroDeCarta.forEach(function(num) {
    //   console.log(num);
    // });
  });

  const bubbleSort = deck => {
    let wall = deck.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (deck[index].Character > deck[index + 1].Character) {
          let aux = deck[index];
          deck[index] = deck[index + 1];
          deck[index + 1] = aux;
        }
        index++;
        console.log(deck);
      }
      wall--; //disminuir la pared para optimizar
    }
    return deck;
  };
};

// var highlightedItems = userList.querySelectorAll(".highlighted");

// highlightedItems.forEach(function(userItem) {
//   deleteUser(userItem);
// }))
