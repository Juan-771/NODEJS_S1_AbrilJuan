const Animal = require("./Animal")
class pajaro extends Animal {
    constructor(nombre,raza){
        super(nombre);
        this.raza=raza;
    }
    hablar(){
        console.log(`El ${this.nombre} es un ${this.raza}!!!`)
    }
}

module.exports=pajaro;