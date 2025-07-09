console.log("hi there")

/* Scrivi un programma che stampi i numeri da 1 a 100
   ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
   Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/* tools
 - for
 - console.log
*/


// uso for per sequenziare i numeri da 1 a 100.

for (let i = 1; i <= 100; i++) {

    // imposto l'if/else-if/else

    if (i % 3 === 0 && i % 5 === 0) {
        // se il numero è divisibile per 3 e per 5, stamperà FizzBuzz
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        // se il numero è solo divisibile per 3, stamperà Fizz
        console.log("Fizz")
    } else if (i % 5 === 0) {
        // se il numero è solo divisibile per 5, stamperà Buzz
        console.log("Buzz")
    } else {
        // se il numero non è divisibile nè per 3 nè per 5, stamperà il numero
        console.log(i)
    }

}








