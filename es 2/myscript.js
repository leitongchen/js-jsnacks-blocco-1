// chiedere all'utente di inserire un numero x 10 volte

var num = []
var somma = 0;

for (var i = 0; i < 10; i++) {

    var numero = parseInt(prompt("Inserisci un numero. Ne mancano " + (10 - i)))

    if (Number.isNaN(numero)) {
        alert("Il numero inserito non è valido. Ne mancano " + (10 - i));
        
        i--
    } else {

        num.push(numero);
    
        somma += numero;

    }
    //num.push(parseInt(prompt("Inserisci un numero")));

}

console.log("La somma dei numeri è " + somma)
console.log("I numeri inseriti sono " + num.join(" + "));



//console.log(num.reduce(reducer));



// stampare la somma dei numeri

