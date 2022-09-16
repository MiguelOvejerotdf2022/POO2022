var Auto = /** @class */ (function () {
    function Auto(parametroMarca, parametroModelo, parametropatente) {
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.patente = parametropatente;
    }
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerModelo = function () {
        return this.modelo;
    };
    Auto.prototype.obtenerPatente = function () {
        return this.patente;
    };
    return Auto;
}());
var autoMiguel = new Auto("FORD", "FOCUS", "PEH 839");
console.log(autoMiguel.obtenerMarca());
