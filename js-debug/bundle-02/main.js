/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// VERIFICA SE UTENTE HA + DI 18 ANNI
function checkAge(myAge) {
    let message = '';

    if (myAge < 18) {
     message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
     message = 'Hai più di 18 anni!';
    }
    console.log(message);
    return message
}
checkAge(32);
// ESERCIZIO 2
// funzione che indica la lunghezza dell'array
// length scritto male e funzione con poco senso metto colors come parametro
const colors = ['blue', 'red', 'yellow', 'green', 'black'];
function printColorsNumber(array) {

    console.log(`Nella mia palette ci sono ${array.length} colori!`);
}
printColorsNumber(colors);


// ESERCIZIO 3
// chiede num a utente e aggiunge 12
//il dato preso non è un numero, aggiungo parseInt
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
// verifica se email inserita è presente nell'array
// garantAccesses non era un valore booleano
const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
function checkAccess(array) {

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (array.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess(addresses);


// ESERCIZIO 5 
// verifica se email inserita è presente nell'array
// garantAccesses non era un valore booleano
// manca la graffa a fine funzione
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();





























