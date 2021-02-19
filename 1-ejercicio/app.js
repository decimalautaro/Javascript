'use strict'

var colores= ["green","red","rgb(133,122,200)","#f15025"];

const boton= document.getElementById("boton");
const color= document.querySelector(".color");

boton.addEventListener("click", function(){

    const numeroRandom= getNumeroRandom();
    console.log(numeroRandom);

    document.body.style.backgroundColor = colores[numeroRandom];
    color.textContent=  colores[numeroRandom];

});
function getNumeroRandom(){
    return Math.floor(Math.random()*colores.length);
}













