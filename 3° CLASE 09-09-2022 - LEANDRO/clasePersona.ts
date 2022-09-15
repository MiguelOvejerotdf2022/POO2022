class Persona{
    //Atributos o Estados
    nombre:string;
    apellido:string;
    dni:number;
    edad:number;
    vivo:boolean;

    //Funcionalidades

    constructor(nombre:string,apellido:string,dni:number,edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.vivo = true;
    }


    hablar(){
        console.log("HOLA");
    }

    razonar(){
        let numero1:number = 5;
        let numero2:number = 4;
        console.log(numero1+numero2);
    }

}

let miguel = new Persona("Facundo","Ovejero",35219578,27);

miguel.hablar();
miguel.razonar();
console.log(miguel.apellido);