// 2.
const numeros = [1,2,3,4,5,6]
let i=0
console.log("a) iterar con while")
while(i < numeros.length){
    console.log(numeros[i]);
    ++i
}

console.log("b) iterar con for")
for(let i=0; i<=numeros.length-1; i++){
    console.log(numeros[i]);
}

console.log("c) iterar con forEach")
numeros.forEach(function (numeros){
    return console.log(numeros);
})

console.log("d) sumar uno a cada uno")
numeros.forEach(function (numeros){
    return console.log(numeros + 1);
})

console.log("e) copia de un array con elementos incrementados en 1")

const arraycopia = numeros.map(numero => numero + 1);
console.log(arraycopia);

console.log("f) promedio")
let suma = numeros.reduce((a, n) => (a += n, a), 0);
let promedio = suma / numeros.length;
console.log(promedio);

// 6.

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
console.log(colores)
let verificar = prompt("Introduce un color (para verificar si se encuentra en el array)");
if (colores.includes(verificar)) {
    alert("Ese color si se encuentra en el array");
} else {
    alert("Ese color no se encuentra en el array");
}

// 10. 

let filaA = document.getElementById("filaA")
filaA.addEventListener("click", function() {
  filaA.classList.toggle("color");
});
let filaB = document.getElementById("filaB")
filaB.addEventListener("click", function() {
  filaB.classList.toggle("color");
});

// 14. 

function cambiarTexto(){
  let tabla = document.getElementById("tabla1"); 
  var celdas1 = tabla.getElementsByTagName("th");
			for (let i = 0; i < celdas1.length; i++) {
				celdas1[i].innerHTML = "-";
			}
}

// 22.

function ejercicio22(event){
  event.preventDefault();
  let mensaje = document.getElementById("mensaje")
  mensaje.innerHTML= "el formulario fue enviado"
}

