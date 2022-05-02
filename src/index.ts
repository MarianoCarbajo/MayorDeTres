let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let rotulo4 = document.getElementById("rotulo4");

rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
rotulo3.innerHTML = "Ingrese el tercer número";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let numero3: number = Number(dato3.value);

  if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
    rotulo4.innerHTML = "Los números deben ser diferentes";
    console.log("Los números deben ser diferentes");
  } else if (numero1 > numero2 && numero1 > numero3) {
    rotulo4.innerHTML = "El mayor de los tres es: " + numero1;
    console.log("El mayor de los tres es: ", numero1);
  } else if (numero1 < numero2 && numero2 > numero3) {
    rotulo4.innerHTML = "El mayor de los tres es: " + numero2;
    console.log("El mayor de los tres es: ", numero2);
  } else {
    rotulo4.innerHTML = "El mayor de los tres es: " + numero3;
    console.log("El mayor de los tres es: ", numero3);
  }
});
