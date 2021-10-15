/* Esercizio 1 */

/* const numeroUtente = parseInt(prompt("Inserisci un numero"));
let numeroUtenteTrasformato;

if (numeroUtente % 2 === 0) {
    numeroUtenteTrasformato = numeroUtente;
    alert(numeroUtenteTrasformato);
} else if (isNaN(numeroUtente)) {
    alert("Non hai inserito un numero")
} else {
    numeroUtenteTrasformato = numeroUtente + 1;
    alert(numeroUtenteTrasformato);
} */

/* Esercizio 2 */

/* const array1 = [15, 2, 7];
const array2 = [5]; */

const array1 = ['ciao'];
const array2 = ['hola', 'hello'];

/* Il ciclo agisce solo se gli array hanno lunghezze differenti */
/* Si poteva fare anche con il while */
for (; array1.length !== array2.length;) {
    /* Elemento aggiuntivo che è un numero random */
    const randomNumber = Math.random * 100;
    
    /* Distinzione dell'if per capire se è più lungo array1 o array2, per poi aggiungere all'altro l'elemento */
    if (array1.length > array2.length) {
        array2.push(randomNumber)
    } else {
        array1.push(randomNumber)
    }   
}

/* Stampa in console della lunghezza degli array per la verifica */
console.log(array1.length, array2.length);