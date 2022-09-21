var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramCanal) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
    }
    Televisor.prototype.setearVolumen = function (volumenUsuario) {
        this.volumenActual = volumenUsuario;
    };
    Televisor.prototype.verVolumenActual = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setearCanal = function (CanalUsuario) {
        this.canalActual = CanalUsuario;
    };
    Televisor.prototype.verCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            return false;
        }
        else {
            return true;
        }
    };
    return Televisor;
}());
var tvLG = new Televisor(true, 14, 24);
var tvSONY = new Televisor(false, 12, 10);
/* let canalTv:number = tvLG.verCanalActual();
console.log("Canala Actual: " + canalTv);        otra manera de mostrar mensaje */
tvLG.setearVolumen(20);
console.log(tvLG.verVolumenActual());
console.log(tvSONY.prenderApagar());
