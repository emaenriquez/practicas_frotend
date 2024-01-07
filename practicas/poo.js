

/* 
opp
la pogramacion orientada a obj en un paradigma de la programacion que se enfoca en los obj en lugar de funciones
es un forma de pensar 
propiedades
son la que describen a un obj
*/


console.log( {} ) // objecto literal

// clase
class Persona {

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`mi nombre es: ${this.nombre}`)
    }

    get fullName(){
        return `${this.nombre} ${this.apellido}`
    }

    set fullName(value){
        [this.nombre,this.apellido] = value.split(' ')
    }

}

let persona = new Persona('david',20)
persona.fullName = 'emanue 30'

persona.saludar()

// herencia

class Estudiante extends Persona{
    
    constructor(nombre,apellido,curso){
        super(nombre,apellido);
        this.curso = curso;
    }

    estudiar(){
        console.log(`mi nombre es: ${this.nombre} y curso ${this.curso}`);
    }

}

let estudiante = new Estudiante('ema',20,'paradigmas de la programacion');

estudiante.estudiar();



