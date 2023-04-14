// Ejercicio 1
function ejercicio1(){
    //Creo array y agrego randomNumbers (le asigne una capacidad max de 20 numeros, pa que no sea tan larga)
    const miarray = Array.from({length: Math.floor(Math.random() * 20)}, () => Math.floor(Math.random() * 100)); //Funcion para generar los numeros aleatorios (los numeros van a ser del 1 al 99)
    //Ordeno el array
    miarray.sort(function(a, b){return a - b});
    let ul = document.createElement("ul"); //Creo lista desordenada
    for (let i = 0; i < miarray.length; i++) {
        let li = document.createElement("li"); //creo el item
        let liTexto = document.createTextNode(miarray[i].toString()); //creo el texto del item
        li.appendChild(liTexto); //agrego el texto al item
        ul.appendChild(li); //agrego el item a la lista desordenada
    }
    let lista = document.getElementById("lista");
    lista.appendChild(ul); //agrego al div
    btnEjercicio1.disabled=true; //desactivo el boton para no crear otra lista
}

// Ejercicio 5
function ejercicio5() {
    const arrayEjercicio5 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
    const arrayEjercicio5A = arrayEjercicio5.filter(nombre => nombre.length <= 6)
    const arrayEjercicio5B = arrayEjercicio5.filter(nombre => nombre.startsWith("M"));
    const arrayEjercicio5C = arrayEjercicio5.sort();
    console.log(arrayEjercicio5C);
    const arrayEjercicio5D = arrayEjercicio5.map(nombre => nombre[0]);
    const arrayEjercicio5F = arrayEjercicio5.map(nombre => nombre.toUpperCase());
    const arrayEjercicio5G = arrayEjercicio5.some(nombre => nombre.startsWith("J"));
}

// Ejercicio 9
function ejercicio9(array, indice1, indice2) {
    const aux= array[indice1]; //genero un array auxiliar
    array[indice1]=array[indice2]; //ingeso el valor de indice2 en el indice1
    array[indice2]=aux; //ingreso el valor de indice1 en el indice2
}

// Ejercicio 13
function cambiarFuente(event) {
	const descripcion = event.target.previousElementSibling; //Obtengo el target de la descripcion
	const fuente = window.getComputedStyle(descripcion).getPropertyValue('font-size'); //saco la fuente de css
	const actualFuente = parseFloat(fuente); //parseo a number
	const nuevaFuente = actualFuente + 2; //aumento fuente
	descripcion.style.fontSize = `${nuevaFuente}px`; //agrego la nueva fuente
}
document.querySelectorAll('.btnNoticia').forEach((btn) => {
	btn.addEventListener('click', cambiarFuente);
});

// Ejercicio 17
const casillas = document.getElementsByTagName("td");

for (let i = 0; i < casillas.length; i++) {
    casillas[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightblue"; //cambio bg con mouseover
    });
}

// Ejercicio 21
function ejercicio21(event){
    event.preventDefault(); //detiene el evento
    let variableLink = document.getElementById("link"); //obtengo ID link
    console.log(variableLink.href)
}





