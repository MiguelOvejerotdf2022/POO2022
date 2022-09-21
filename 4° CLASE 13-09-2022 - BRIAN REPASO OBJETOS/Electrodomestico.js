var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramNombre, paramprecioBase, paramColor, paramConsumoEnergetico, paramPeso) {
        this.nombre = paramNombre;
        this.precioBase = paramprecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }
    Electrodomestico.prototype.obtener_Nombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setear_Nombre = function (paramatroEntradaNombre) {
        this.nombre = paramatroEntradaNombre;
    };
    Electrodomestico.prototype.obtener_Precio = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setear_Precio = function (parametroEntradaPrecio) {
        this.precioBase = parametroEntradaPrecio;
    };
    Electrodomestico.prototype.obtener_Color = function () {
        return this.color;
    };
    Electrodomestico.prototype.setear_Color = function (parametroEntradaColor) {
        this.color = parametroEntradaColor;
    };
    Electrodomestico.prototype.setearBajoConsumo = function (parametroEntradaConsumo) {
        this.consumoEnergetico = parametroEntradaConsumo;
    };
    Electrodomestico.prototype.obtener_Peso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setear_Peso = function (parametroEntradaPeso) {
        this.peso = parametroEntradaPeso;
    };
    Electrodomestico.prototype.bajoConsumo = function () {
        if (this.consumoEnergetico < 1200) {
            return true;
        }
        else {
            return false;
        }
    };
    Electrodomestico.prototype.calcularBalance = function () {
        var balance = (this.precioBase / this.peso);
        return balance;
    };
    Electrodomestico.prototype.verificarAltaGama = function () {
        if (electrodomestico1.calcularBalance() > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    return Electrodomestico;
}());
var electrodomestico1 = new Electrodomestico("Licuadora", 500, "WHITE", 5000, 12);
console.log("PESO: " + electrodomestico1.peso + "kg");
console.log("BAJO CONSUMO: " + electrodomestico1.bajoConsumo());
electrodomestico1.setear_Precio(3);
electrodomestico1.setear_Peso(1);
console.log("BALANCE: " + electrodomestico1.calcularBalance());
console.log("GAMA ALTA: " + electrodomestico1.verificarAltaGama());
