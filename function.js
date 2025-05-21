// funzione che restituisce il numero di vocali
const numVocali = (string) => {
    let contVocali = 0;
    const vocali = "aeiou";
    for(let lettera of vocali) {
        if(string.toUpperCase().includes(lettera.toUpperCase())) {
            contVocali++
        }
    }

    return contVocali;
}


// funzione che restituisce il numero più grande
function numMax (arrayNum) {

    let numMax = parseInt(arrayNum[0]);
    arrayNum.forEach(num => {
        if(numMax < parseInt(num)) {
            numMax = num;
        }
    })
    return numMax
}

export {numVocali, numMax};




