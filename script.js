
let lengthEl = document.getElementById("length-output-el")
let volumeEl = document.getElementById("volume-output-el")
let massEl = document.getElementById("mass-output-el")

let inputEl = document.getElementById("input-number")
let convertBtn = document.getElementById("convert-btn")

const meterFeet = 3.281 
const literGallon =  0.264
const kiloPound =  2.204

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value;
    let metersToFeets = (inputEl.value * meterFeet).toFixed(3);
    let feetsToMeters = (inputEl.value / meterFeet).toFixed(3);
    lengthEl.textContent = `${inputValue} meters = ${metersToFeets} feets| ${inputValue} feet = ${feetsToMeters} meters`;

    let literToGallon = (inputEl.value * literGallon).toFixed(3);
    let gallonToLiter = (inputEl.value / literGallon).toFixed(3);
    volumeEl.textContent = `${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallon = ${gallonToLiter} liters`;

    let kilosToPunds = (inputEl.value * kiloPound).toFixed(3);
    let poundsToKilos = (inputEl.value / kiloPound).toFixed(3);
    massEl.textContent = `${inputValue} kilos = ${kilosToPunds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
})

