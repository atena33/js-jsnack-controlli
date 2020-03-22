 // L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var msg;
 // L'utente inserisce un numero
var uno = parseInt(prompt("Inserisci un numero"));
 // L'utente inserisce un altro numero
var due = parseInt(prompt("Inserisci un altro numero"));
 // Il software li elabora
if (uno > due) {
   msg = uno + " è il numero più grande";
 }
else if (uno < due) {
   msg = due + " è il numero più grande";
 }
else {
   msg = "I tuoi numeri sono uguali: " + uno;
 }

 // Output

document.getElementById("risultato").innerHTML = msg;
