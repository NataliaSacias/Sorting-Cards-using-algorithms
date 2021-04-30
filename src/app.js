/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //let figure = ["♥", "♦", "♣", "♠"];
  let figure = ["♣️", "♠️", "♦️", "♥️"];
  let character = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const principal = document.getElementById("principal"); // div que contiene las cartas
  const secundario = document.getElementById("secundario"); // div que contiene las cartas ordenadas
  let mostrarCarta = document.querySelector("#mostrar-carta"); //boton mostrar carta
  let cantidad = document.querySelector("#cantidad"); //input para la cantidad de cartas
  const botonBurbuja = document.querySelector("#boton-burbuja");
  const botonSeleccion = document.querySelector("#boton-seleccion");

  let deck = [];

  const pintarCartas = () => {
    for (let i = 0; i < cantidad.value; i++) {
      let figureRandom = figure[Math.floor(Math.random() * figure.length)];
      let characterRandom =
        character[Math.floor(Math.random() * character.length)];
      deck.push({ Figura: figureRandom, Character: characterRandom });

      principal.innerHTML += `
      <div class="m-6 col-2 carta" id='carta-completa'>
      <div id="figura1" class="card-body d-flex justify-content-start">${figureRandom}</div>
      <div id="numero" class="card-body d-flex align-items-center d-flex justify-content-center pt-5 display-3">${devolverLetra(
        characterRandom
      )}</div>
      <div id="figura2" class="card-body d-flex justify-content-start rotate">${figureRandom}</div>
      </div>`;

      twemoji.parse(document.body);
    }
    console.log(deck[1].Figura);
  };

  //EVENTO EN BOTON MOSTAR CARTAS
  mostrarCarta.addEventListener("click", () => {
    principal.innerHTML = "";
    pintarCartas();
    botonBurbuja.disabled = false;
  });

  //EVENTO EN BOTON ORDENAR POR BURBUJA
  botonBurbuja.addEventListener("click", () => {
    //secundario.innerHTML = "";
    bubbleSort(deck);
    //botonBurbuja.disabled = true;
    cartasOrdenadas();
  });

  //EVENTO EN BOTON ORDENAR POR SELECCION
  botonSeleccion.addEventListener("click", () => {
    //secundario.innerHTML = "";
    selectSort(deck);
    cartasOrdenadas();
  });

  const cartasOrdenadas = () => {
    for (let i = 0; i < deck.length; i++) {
      secundario.innerHTML += `
     <div class="m-6 col-2 carta" id='carta-completa'>
     <div id="figura1" class="card-body d-flex justify-content-start">${
       deck[i].Figura
     }</div>
     <div id="numero" class="card-body d-flex align-items-center d-flex justify-content-center pt-5 display-3">${devolverLetra(
       deck[i].Character
     )}</div>
     <div id="figura2" class="card-body d-flex justify-content-start rotate">${
       deck[i].Figura
     }</div>
     </div>`;
      twemoji.parse(document.body);
    }
  };
  //***********************************
  //*******  FUNCION BUBBLESORT  ******
  //***********************************
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

//***********************************
//*******  FUNCION SELECTSORT  ******
//***********************************

const selectSort = deck => {
  let min = 0;
  while (min < deck.length - 1) {
    for (let i = min + 1; i < deck.length - 1; i++) {
      if (deck[min].Character > deck[i].Character) {
        let aux = deck[min];
        deck[min] = deck[i];
        deck[i] = aux;
      }
    }
    min++;
  }
  return deck;
};

const devolverLetra = numero => {
  let letra = numero;
  if (numero == 11) letra = "J";
  else if (numero == 12) letra = "Q";
  else if (numero == 13) letra = "K";
  else if (numero == 1) letra = "A";
  return letra;
};

/*errore y cosas por mejorar
se repite el html 
A>que todo
input numerico acepta otros valores
no limpia html ni arreglo botones sorts */
