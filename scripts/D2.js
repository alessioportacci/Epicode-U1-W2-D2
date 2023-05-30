//Variabili che andrò ad utilizzare

let n1 = null
let n2 = null
let n3 = null

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi. */

n1 = 5
n2 = 20

if (n1 > n2)
    console.log("Il numero più grande è", n1)
  else 
    console.log("Il numero più grande è", n2)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5. */

n1 = 4

if (n1 !== 5 )
    console.log(n1, "not equal", 5)
  else
    console.log(n1, "equal", 5)


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca) */

n1 = 11

if((n1 % 5) === 0)
    console.log(n1, "divisibile per 5")
  else
    console.log(n1, "non divisibile per 5")


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8. */

n1 = 5
n2 = 3

if((n1 === 8 || n2 === 8) || (n1 + n2 === 8 || n1 - n2 === 8))
    console.log("La condizione è vera")
  else
    console.log("La condizione è falsa")


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout. */

let totalShoppingCart = 50.1

if(totalShoppingCart <= 50)
    console.log("Totale carrello:", totalShoppingCart, "\n" 
              + "L'ammontare totale della spesa più spedizione è di", totalShoppingCart += 10, "- non si ha diritto alla spedizione gratuita")
  else
    console.log("Totale carrello:", totalShoppingCart, "\n" 
              + "L'ammontare totale della spesa è di", totalShoppingCart, "- si ha diritto alla spedizione gratuita")


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale. */

totalShoppingCart -= totalShoppingCart*(20 / 100) //Applico lo scondo del 20%

if(totalShoppingCart < 51)
    console.log("Totale carrello:", totalShoppingCart, "\n"
              + "L'ammontare totale della spesa con sconto più spedizione è di", totalShoppingCart += 10, "- non si ha diritto alla spedizione gratuita")
  else
    console.log("Totale carrello:", totalShoppingCart, "\n"
              + "L'ammontare totale della spesa con sconto è di", totalShoppingCart, "- si ha diritto alla spedizione gratuita")


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console. */

let memo = null  //Serve come appoggio
n1 = 2
n2 = 50
n3 = 25

if (n1 < n2) //Controllo che il secondo numero sia più grande del primo
{
    memo = n1
    n1 = n2 
    n2 = memo
}
if (n1 < n3) //Controllo che il terzo numero sia più grande del primo
{
    memo = n1
    n1 = n3
    n3 = memo
}
if (n2 < n3) //Controllo che il terzo numero sia più grande del secondo
{
    memo = n2
    n2 = n3
    n3 = memo  
}

console.log(n1, n2, n3)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").*/

const variable = "ciao"

if(typeof variable == "number")
    console.log("La variabile è un numero")
  else
    console.log("La variabile non è un numero")


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)*/

n1 = 7

if(n1 % 2 === 0)
    console.log("Il numero è pari")
  else
    console.log("Il numero è dispari")


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7

if (val < 10)
    console.log("Meno di 10")
  else if (val < 5) 
    console.log("Meno di 5")
  else if (val >= 10)
    console.log("Uguale a 10 o maggiore")
  

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName". */

delete me.lastName
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills". */

me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10. */

const myArray = []
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log("myArray", myArray)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.*/

myArray.pop()
myArray.push(100)
console.log("myArray", myArray)