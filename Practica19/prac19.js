'use strict'

function multi (multiplicador, multiplicando) {
    let suma = 0;
    for (let i=0; i <multiplicador; i++) {
        suma = suma + multiplicando;
    }

    return suma;
    
}
let numUno = Number (prompt ("Ingrese el multiplicador")), numDos = Number (prompt ("Ingrese el multiplicando"));

let result = multi (numUno, numDos);
alert ("El valor de la multiplicación es de "+result);