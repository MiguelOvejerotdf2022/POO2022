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
var Calefactor = /** @class */ (function () {
    // Funcionalidades
    function Calefactor(marca, capacidad, temperaturaActual) {
        this.marca = marca;
        this.capacidad = capacidad;
        this.temperaturaActual = temperaturaActual;
    }
    Calefactor.prototype.subirTemperatura = function () {
        var temperaturaActual = 10;
        temperaturaActual = temperaturaActual + 1;
        console.log("Temperatura Max: " + temperaturaActual + "°");
    };
    Calefactor.prototype.bajarTemperatura = function () {
        var temperaturaActual = 4;
        temperaturaActual = temperaturaActual - 1;
        console.log("Temperatura Min: " + temperaturaActual + "°");
    };
    return Calefactor;
}());
var artefacto = new Calefactor("surrey", 150, 25);
artefacto.subirTemperatura();
artefacto.bajarTemperatura();
console.log("Capacidad: " + artefacto.capacidad + "k/cal");
