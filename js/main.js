const numeroUtente = prompt("Inserisci un numero");
let numeroUtenteTrasformato;

if (numeroUtente % 2 === 0) {
    numeroUtenteTrasformato = numeroUtente;
    alert(numeroUtenteTrasformato);
} else {
    numeroUtenteTrasformato = parseInt(numeroUtente) + 1;
    alert(numeroUtenteTrasformato);
}