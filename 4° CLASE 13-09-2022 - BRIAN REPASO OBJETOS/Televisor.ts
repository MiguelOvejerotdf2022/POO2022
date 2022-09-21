class Televisor{
    private estaPrendido:boolean;
    private volumenActual:number;
    private canalActual:number;

    constructor(paramPrendido:boolean,paramVolumen:number,paramCanal:number){
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
    }

    public setearVolumen(volumenUsuario:number):void{
        this.volumenActual = volumenUsuario;
    }

    public verVolumenActual():number{
        return this.volumenActual;
    }

    public setearCanal(CanalUsuario:number):void{
        this.canalActual = CanalUsuario;
    }

    public verCanalActual():number{
        return this.canalActual;
    }

    public prenderApagar():boolean{
        if (this.estaPrendido === true) {
            return  false;
        } else {
            return  true;
        }
    }
}

let tvLG = new Televisor(true,14,24);
let tvSONY = new Televisor(false,12,10);

/* let canalTv:number = tvLG.verCanalActual();
console.log("Canala Actual: " + canalTv);        otra manera de mostrar mensaje */

tvLG.setearVolumen(20);
console.log(tvLG.verVolumenActual());
console.log(tvSONY.prenderApagar());


