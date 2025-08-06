const Animal = require('./Animal');

class Perro extends Animal{
    hablar(){
        console.log(`${this.nombre} esta Ladrando`)
    }
}
module.exports=Perro;