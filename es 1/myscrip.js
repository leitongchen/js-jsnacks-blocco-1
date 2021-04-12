// utente inserisce due parole 
var firstWord = prompt("Inserisci la prima parola").trim();
var secondWord = prompt("Inserisci la seconda parola").trim();


//verificare che siano state inserite parole e non numeri 

if (Number(firstWord) || Number(secondWord)) {
    alert("Non è possibile inserire numeri. Inserisci solo parole.")

} else {

    // verificare quale è la parola più corta e quale più lunga

    var longestWord 
    var shortestWord

    if (firstWord.length > secondWord.length) {
        longestWord = firstWord;
        shortestWord = secondWord; 
    } else if (firstWord.length < secondWord.length){
        longestWord = secondWord;
        shortestWord = firstWord; 
    } 

    if (typeof longestWord !== "undefined" || typeof shortestWord !== "undefined") {
        console.log("La parola più lunga è " + longestWord + ". La parola più corta è " + shortestWord);
    } else {
        console.log("Le due parole hanno la stessa lunghezza.")
    }

    // stampare il risultato
    


}



