// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var  msg;
// L'utente inserisce la prima parola
var uno = prompt ("Inserisci una parola");

// L'utente inserisce la seconda parola

var due = prompt ("Inserisci un'altra parola");

// Il software deve stabilire qual è la più lunga

 if (uno.length > due.length) {
  msg = uno + " è la parola più lunga";
 }
 else if (uno.length < due.length) {
   msg = due + " è la parola più lunga";
 }
 else {
   msg = uno + " ha la stessa lunghezza di " + due;
 }

 // Output

document.getElementById("risultato").innerHTML = msg;
