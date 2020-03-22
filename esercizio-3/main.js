//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
var msg;

var uno = parseInt(prompt("Inserisci un numero"));
var due = parseInt(prompt("Inserisci un altro numero"));
var tre = parseInt(prompt("Inserisci un altro numero"));
var quattro = parseInt(prompt("Inserisci un altro numero"));
var cinque = parseInt(prompt("Inserisci un altro numero"));

// Somma dei numeri

msg = uno + due + tre + quattro + cinque;

// Output

document.getElementById("risultato").innerHTML = "La somma è " + msg;
