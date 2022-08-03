
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 25;

function celsiusConverter (celsius) {
    return (((celsius / 5) * 9) + 32)
}

let fahrenheitTemp = 95;

function fahrenheitConverter (fahrenheit) {
    return (((fahrenheit -32 ) * 5) / 9)
}


console.log(celsiusTemp + "ºC is " + celsiusConverter(celsiusTemp) + "ºF");

console.log(fahrenheitTemp + "ºF is " + fahrenheitConverter(fahrenheitTemp) + "ºC");


