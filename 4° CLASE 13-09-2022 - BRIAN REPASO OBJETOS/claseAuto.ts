class Auto{
    marca:string;
    modelo:string;
    patente:string;

    constructor(parametroMarca:string,parametroModelo:string,parametropatente:string){
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.patente = parametropatente;
    }

    obtenerMarca():string{
        return this.marca;
    }

    obtenerModelo():string{
        return this.modelo;
    }

    obtenerPatente():string{
        return this.patente;
    }
}

let autoMiguel = new Auto("FORD","FOCUS","PEH 839");

console.log(autoMiguel.obtenerMarca());

