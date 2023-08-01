class Persona {
    constructor(nombre, edad, peso, altura, imc) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.imc = imc;
    }
}

let datosPersonasIngreso = [];
console.log(Persona)

  //==============Variables=================//
let nombre;
let txtPeso;
let txtAltura;

let peso = 0;
let altura = 0;
let imc = 0;
let btnCalcular = 0;

  //Bucle//

do {
    nombre = prompt("¿Podrías escribir tu nombre?");

    //aca escribi toda la logica de carga de datos

    if (nombre !== "ESC") {
    alert("Bienvenido " + nombre);

    let edad = prompt("Ingresa tú edad");
    if (edad === "") {
        alert("No ingresaste ninguna edad.");
    } else {
        alert("Edad Ingresada: " + edad);
    }

    peso = parseFloat(prompt("Ingresa tú peso"));

    altura = parseFloat(prompt("Ingresa tú altura"));

    imc = peso / (altura * altura);
    alert(nombre + " tú IMC es: " + Math.round(imc));
    
    let persona = new Persona(nombre, edad, peso, altura, imc);
    datosPersonasIngreso.push(persona);
}

} while (nombre !== "ESC");

console.log(datosPersonasIngreso);

datosPersonasIngreso.filter (persona =>{
    console.log(persona.nombre);
})