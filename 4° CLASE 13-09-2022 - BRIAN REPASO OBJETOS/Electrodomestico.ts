class Electrodomestico{
    private nombre:string;
    private precioBase:number;
    private color:string;
    private consumoEnergetico:number;
    private peso:number;

    constructor(paramNombre:string,paramprecioBase:number,paramColor:string,paramConsumoEnergetico:number,paramPeso:number){
        this.nombre = paramNombre;
        this.precioBase = paramprecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }

    obtener_Nombre():string{
        return this.nombre;
    }

    setear_Nombre(paramatroEntradaNombre:string):void{    // void o nada directamente porque no necesito devolver nada.
        this.nombre = paramatroEntradaNombre;
    }

    obtener_Precio():number{
        return this.precioBase;
    }

    setear_Precio(parametroEntradaPrecio):void{      
        this.precioBase = parametroEntradaPrecio;
    }

    obtener_Color():string{
        return this.color;
    }

    setear_Color(parametroEntradaColor:string):void{
        this.color = parametroEntradaColor;
    }

    setearBajoConsumo(parametroEntradaConsumo:number):void{
        this.consumoEnergetico = parametroEntradaConsumo;
    }

    obtener_Peso():number{
        return this.peso;
    }

    setear_Peso(parametroEntradaPeso:number):void{
        this.peso = parametroEntradaPeso;
    }

    bajoConsumo():boolean{
        if (this.consumoEnergetico <1200) {
            return true;
        } else {
            return false;
        }   
    }

    calcularBalance():number{
        let balance:number = (this.precioBase/this.peso);
        return balance;
    }

    verificarAltaGama():boolean{
        if (electrodomestico1.calcularBalance() > 3 ) {
            return true;
        } else{
            return false;
        }
    }
}

let electrodomestico1 = new Electrodomestico("Licuadora",500,"WHITE",5000,12);
console.log("PESO: " + electrodomestico1.peso + "kg");
console.log("BAJO CONSUMO: " + electrodomestico1.bajoConsumo());

electrodomestico1.setear_Precio(3);
electrodomestico1.setear_Peso(1);
console.log("BALANCE: " + electrodomestico1.calcularBalance());
console.log("GAMA ALTA: " + electrodomestico1.verificarAltaGama());



