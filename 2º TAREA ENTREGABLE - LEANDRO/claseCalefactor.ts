// Calefactor

//   Funcionalidades
//      encenderApagar
//      subirTemperatura
//      bajarTemperatura 

//   Estado o Atributos
//      estaPrendido
//      capacidad
//      marca
//      temperaturaActual



class Calefactor{
    // Atributos o Estados
    marca:string;
    capacidad:number;
    temperaturaActual:number;
    estaPrendido:boolean;


    // Funcionalidades
    constructor(marca:string,capacidad:number,temperaturaActual:number){
        this.marca = marca;
        this.capacidad = capacidad;
        this.temperaturaActual = temperaturaActual;
    }
    
    subirTemperatura(){
        let temperaturaActual:number = 10;
        temperaturaActual = temperaturaActual + 1;
        console.log("Temperatura Max: " + temperaturaActual + "°");
    }

    bajarTemperatura(){
        let temperaturaActual:number = 4;
        temperaturaActual = temperaturaActual - 1;
        console.log("Temperatura Min: " + temperaturaActual + "°");
    }
    
}

let artefacto = new Calefactor("surrey",150,25);

artefacto.subirTemperatura();
artefacto.bajarTemperatura();
console.log("Capacidad: " + artefacto.capacidad + " k/cal");








