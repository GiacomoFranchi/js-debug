/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// funzione che restituisce a console i numeri da 0 a 4

let a= "";
for (let i = 0; i < 5; i++) {
    a = i;
    console.log(a);
}




// ESERCIZIO 2
//la funzione controlla se il num è pari 
// la funzione non viene richiamata
//    se è pari aggiunge 5 al mun
//    se non è pari restituisce il num
//    num / 2 = 0 è un errore bisogna usare ===
function addIfEven(num) {
    if (!num % 2 === 0) {
        return num + 5;
    }
    return num;
}
let dispari = addIfEven(6)
console.log(dispari);

// ESERCIZIO 3
// fa girare in loop i numeri da 0 a 5
// nel ciclo for si usa il ; non la virgola
function loopToFive() {
    const array = []
    let a = "";
    for (let i = 0; i < 6; i++) {
        a = i;
        if ( a > 5){
            a = 0
        }
        array.push(a)
    }
    return array
}
const c = loopToFive()
console.log(c);
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
//Funzione che mostra a display solo i numeri pari

//nel ciclo for dopo i++ non va il ;
// in if si usa === non =
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    let a = "";
    for (let i = 0; i < numbers.length; i++) {
        a = numbers[i];   

        if(a % 2 == 0){
            evenNumbers.push(a);
        }    
      }
      console.log(evenNumbers);
}

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

