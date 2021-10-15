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

for (; array1.length !== array2.length;) {
    const randomNumber = Math.random * 100;
    
    if (array1.length > array2.length) {
        array2.push(randomNumber)
    } else {
        array1.push(randomNumber)
    }   
}

console.log(array1.length, array2.length);