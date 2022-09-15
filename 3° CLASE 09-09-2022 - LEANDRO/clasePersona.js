var Persona = /** @class */ (function () {
    //Funcionalidades
    function Persona(nombre, apellido, dni, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.vivo = true;
    }
    Persona.prototype.hablar = function () {
        console.log("HOLA");
    };
    Persona.prototype.razonar = function () {
        var numero1 = 5;
        var numero2 = 4;
        console.log(numero1 + numero2);
    };
    return Persona;
}());
var miguel = new Persona("Facundo", "Ovejero", 35219578, 27);
miguel.hablar();
miguel.razonar();
console.log(miguel.apellido);
