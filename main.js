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

    // creo variabile multiplo di 3
    let fizz = i % 3 === 0

    // creo variabile multiplo di 5
    let buzz = i % 5 === 0

    // creo variabile multiplo di 3 e di 5
    let fizz_buzz = i % 3 === 0 && i % 5 === 0

    // imposto l'if/else-if/else
    if (fizz_buzz) {
        console.log("FizzBuzz")
    } else if (fizz) {
        console.log("Fizz")
    } else if (buzz) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}






