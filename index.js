//==============Variables=================//
let nombre = ""
let txtPeso
let txtAltura

let peso = 0
let altura = 0
let imc = 0
let btnCalcular = 0

//Función de peso y altura//
function clickBtnCalcular() {
    txtPeso = document.getElementById('txtPeso')
    peso = txtPeso.value

    txtAltura = document.getElementById('txtAltura')
    altura = txtAltura.value
//Función de bucle//
    do {
        nombre = prompt("¿Podrías escribir tu nombre?")
    } while (!isNaN(nombre) || "")
//Función de calculadora//
    imc = peso / (altura * altura)
    alert(nombre + " el IMC es: " + Math.round(imc))
}

//Función de botón//
function iniciar() {
    btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click", clickBtnCalcular)
}

window.onload = iniciar