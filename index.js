import {numVocali, numMax} from "./function.js";

// Concateno nel caso ci siano più parole  
let phrase = "";
for (let i = 2; i < process.argv.length; i++) {
    phrase += process.argv[i];
}




// Creo array di numeri 
const arrayNum = [];
for (let i = 2; i < process.argv.length; i++) {
    arrayNum.push(process.argv[i]);
}



// Creo un nuovo argv senza i primi 2 elementi
const newArgv = process.argv.slice(2);

// controllo se tutti gli elementi sono numeri
const numeri = newArgv.every(curNumeri => {
    return !isNaN(curNumeri);
});

// Se tutti gli elementi sono numeri allora numeri sarà "true" ed eseguo la funzione "numMax"
// altrimenti eseguo la funzione "numVocali"
if(numeri) {

    // Uso l'array creato in "arrayNum" come argomento della funzione
    console.log(numMax(arrayNum));

} else {

    // Uso phrase come argomento per trovare le vocali sia di una singola parola che di una frase
    console.log(numVocali(phrase));
}


