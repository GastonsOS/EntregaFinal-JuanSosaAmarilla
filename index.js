//==============Variables=================//
let nombre = ""
let txtPeso
let txtAltura

let peso = 0
let altura = 0
let imc = 0
let btnCalcular = 0

//Bucle//

do {
    nombre = prompt("¿Podrías escribir tu nombre?")
    
} while (!isNaN(nombre) || "")
    alert("Bienvenido " + nombre)

//Función de peso y altura//

function clickBtnCalcular() {
    txtPeso = document.getElementById('txtPeso')
    peso = txtPeso.value

    txtAltura = document.getElementById('txtAltura')
    altura = txtAltura.value

//Calculadora//
imc = peso / (altura * altura)
    alert(nombre + " tú IMC es: " + Math.round(imc))

}

let edad = prompt("Ingresa tú edad");

if(edad == "") {
    alert("No ingresaste ninguna edad.")
}

else {
    alert("Edad Ingresada" + edad)
}

//Función de botón//
function iniciar() {
    btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click", clickBtnCalcular)
}

window.onload = iniciar

class Persona {
    contructor (nombre, edad, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
    }

hablar () {
    console.log("HOLA" + this.nombre) ;
}

}

//Variables 

const datos = {
    ctxtPeso : document.getElementById('txtPeso') ,
    ctxtAltura : document.getElementById('txtAltura') ,
    cbtnCalcular : document.getElementById("btnCalcular")
}