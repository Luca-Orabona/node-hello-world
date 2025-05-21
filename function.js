// funzione che restituisce il numero di vocali
const numVocali = (string) => {
    string = string.toUpperCase();
    let contVocali = 0;
    const vocali = "AEIOU";
    for(let lettera of string) {
        if(vocali.includes(lettera)) {
            contVocali++
        }
    }

    return contVocali;
}


// funzione che restituisce il numero più grande
function numMax (arrayNum) {
    arrayNum = arrayNum.map(num => parseInt(num));
    let numMax = arrayNum[0];
    arrayNum.forEach(num => {
        if(numMax < num) {
            numMax = num;
        }
    })
    return numMax
}

export {numVocali, numMax};




