// Ejercicio 3

let Numeroselevados = [5,25,10, 100];
let Push = 0
let Resultado = []

for (i=0, ii=Numeroselevados.length; i<ii; i++) {
  Push = Numeroselevados[i] * Numeroselevados[i];
  Resultado.push(Push)}

  //console.log(Resultado)

//Ejercicio 7

let NumerosPares = [2,5,8,142,163,999, -2]
let ResultadosPares= []

function IdentificadorDePares() {
  for (i=0, ii=NumerosPares.length; i<ii; i++)
  if ((NumerosPares[i] % 2)== 0 ) {
    ResultadosPares.push(NumerosPares[i])
    
  }
console.log(ResultadosPares)
}
//IdentificadorDePares()


// Ejercicio 11
function Oculto1(){
  OcultarItem("1")
}
function Oculto2(){
  OcultarItem("2")
}
function Oculto3(){
  OcultarItem("3")
}
function Oculto4(){
  OcultarItem("4")
}
function OcultarItem(item){
  if (document.getElementById(item).style.opacity === "1") {
    document.getElementById(item).style.opacity = "0";
  } else {
    document.getElementById(item).style.opacity = "1";
  }
}

//Ejercicio 15

function CambiodelinkFacebook(){
  let FacebookLink = "https://www.facebook.com/"
  document.getElementById("link").href = FacebookLink
  document.getElementById("link").innerHTML = "El link ahora mismo lleva a Facebook"
  
}

function CambiodelinkYoutube(){
  let YoutubeLink = "https://www.youtube.com/"
  document.getElementById("link").href = YoutubeLink
  document.getElementById("link").innerHTML = "El link ahora mismo lleva a Youtube"
 
}

  function Cambiodelinkinstagram(){
  let InstagramLink = "https://www.instagram.com/"
  document.getElementById("link").href = InstagramLink
  document.getElementById("link").innerHTML = "El link ahora mismo lleva a Instagram"
  
}

// Ejercicio 19

var ul = document.querySelector(".logo")

function Cambiodetamaño(){
  if (ul.style.width == "800px") {
    ul.style.width = "250px"
  ul.style.height = "250px"
  } else {
    ul.style.width = "800px"
  ul.style.height = "70px"
  }
}