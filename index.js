import {numVocali, numMax} from "./function.js";

// Concateno nel caso ci siano più parole  
let phrase = "";
for (let i = 2; i < process.argv.length; i++) {
    phrase += process.argv[i];
}

// Uso phrase come argomento per trovare le vocali sia di una singola parola che di una frase
console.log(numVocali(phrase));


// Creo array di numeri 
const arrayNum = [];
for (let i = 2; i < process.argv.length; i++) {
    arrayNum.push(process.argv[i]);
}

// Uso l'array di numeri presi dal terminale come argomento della funzione
console.log(numMax(arrayNum));

