import {numVocali, numMax} from "./function.js";


// Creo un nuovo argv senza i primi 2 elementi
const newArgv = process.argv.slice(2);

// controllo se tutti gli elementi sono numeri
const numeri = newArgv.every(curNumeri => {
    return !isNaN(curNumeri);
});

// Se tutti gli elementi sono numeri allora numeri sarà "true" ed eseguo la funzione "numMax"
// altrimenti eseguo la funzione "numVocali"
if(numeri) {

    // Uso newArgv come argomento della funzione
    console.log(numMax(newArgv));

} else {

    // Uso newArgv come argomento della funzione ma trasformandolo in una stringa
    console.log(numVocali(newArgv.join(" ")));
}


