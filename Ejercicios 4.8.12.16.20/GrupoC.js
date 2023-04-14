// Ej 4

let arrayEj4 = [1, -4, 12, 0, -3, 29, -150];
let total = 0;
for(let i = 0; i< arrayEj4.length; i++) 
    { if (arrayEj4[i]>0)
    total+= arrayEj4[i];}
console.log(total);


// Ej 8
let arrayEj8 = ["camino", "arquitecto", "botella", "escuela", "indigo"];
let arrayVocales = [];
let vocalA = arrayEj8.filter(word => word.startsWith("a"));
let vocalE = arrayEj8.filter(word => word.startsWith("e"));
let vocalI = arrayEj8.filter(word => word.startsWith("i"));
let vocalO = arrayEj8.filter(word => word.startsWith("o"));
let vocalU = arrayEj8.filter(word => word.startsWith("u"));
arrayVocales.push(vocalA);
arrayVocales.push(vocalE);
arrayVocales.push(vocalI);
arrayVocales.push(vocalO);
arrayVocales.push(vocalU);
console.log(arrayVocales)
