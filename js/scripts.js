// plik scripts.js
var a, b, value, isItZero;
a = prompt("Wpisz pierwszą liczbę");
b = prompt("Wpisz drugą liczbę");
value = (a * a) + (2 * a * b) - (b * b);
//alert('Witaj, ' + name);
console.log("Wynik wynosi: " + value);
if (value > 0){
    console.log("Wynik dodatni");
}
else if (value < 0){
    console.log("Wynik ujemny");
}
isItZero = (value === 0) ? "Liczba jest równa: 0" : "Liczba nie jest równa: 0";
alert(isItZero);
//linear comment

/* block
comment
!!!! */