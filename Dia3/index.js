const Persona = require('./models/Persona');
const Perro = require ("./models/Perro");
const Gato = require("./models/Gato")

const pedro = new Persona('Pedro',25);
pedro.saludar();

const animal1 = new Perro("Paco");
animal1.hablar();

const Animal2 = new Gato("Mechas");
Animal2.hablar();