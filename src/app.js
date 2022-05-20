/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const iconoCorazon = `♥`;
const iconoPicas = `♠`;
const iconoTrebol = `♣`;
const iconoDiamante = `♦`;
const numerosCartas = [1, 2, 3, 4, 5, 6, 7, 8, "J", "Q", "K"];
const numeroSelect = numerosCartas[Math.floor(Math.random() * 11)];
const iconos = [iconoCorazon, iconoPicas, iconoTrebol, iconoDiamante];
const iconoSlect = iconos[Math.floor(Math.random() * 4)];
const carta = document.querySelector(".carta");
const contenedorIconoArriba = document.querySelector(
  ".contenedor-icono-arriba"
);
const cardNumber = document.querySelector(".card-number");
const contenedorIconoAbajo = document.querySelector(".contenedor-icono-abajo");

// contenedorIconoAbajo.innerHTML = `${iconoSlect}`;
// contenedorIconoArriba.innerHTML = `${iconoSlect}`;
// cardNumber.innerHTML = `${numeroSelect}`;

const botonCrearCarta = document.querySelector(".boton-crear-carta");
const botonWidth = document.querySelector(".boton-width");
const botonHeight = document.querySelector(".boton-height");

window.onload = function() {
  contenedorIconoAbajo.innerHTML = `${iconoSlect}`;
  contenedorIconoArriba.innerHTML = `${iconoSlect}`;
  cardNumber.innerHTML = `${numeroSelect}`;
};

// // Boton crear carta

botonCrearCarta.addEventListener("click", e => {
  let numeroSelect = numerosCartas[Math.floor(Math.random() * 11)];
  let iconoSlect = iconos[Math.floor(Math.random() * 4)];
  contenedorIconoAbajo.innerHTML = `${iconoSlect}`;
  contenedorIconoArriba.innerHTML = `${iconoSlect}`;
  cardNumber.innerHTML = `${numeroSelect}`;
});

// // Timmer.

setInterval(() => {
  botonCrearCarta.click();
}, 10000);

// Cambiar width y height

botonWidth.addEventListener("change", e => {
  carta.style.width = botonWidth.value + "px";
});
botonHeight.addEventListener("change", e => {
  carta.style.height = botonHeight.value + "px";
});
