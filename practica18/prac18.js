'use strict'

function calculateAge (year) {
    let currentYear=2023;
    let age= currentYear-year;
    alert(age);
}

let yearOfBirth = Number (prompt ("Escriba su año de nacimiento"))
calculateAge (yearOfBirth);