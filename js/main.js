const numeroUtente = parseInt(prompt("Inserisci un numero"));
let numeroUtenteTrasformato;

if (numeroUtente % 2 === 0) {
    numeroUtenteTrasformato = numeroUtente;
    alert(numeroUtenteTrasformato);
} else if (isNaN(numeroUtente)) {
    alert("Non hai inserito un numero")
} else {
    numeroUtenteTrasformato = numeroUtente + 1;
    alert(numeroUtenteTrasformato);
}