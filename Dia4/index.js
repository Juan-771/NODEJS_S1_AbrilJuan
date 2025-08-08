const Persona = require('./models/Persona');
const Perro = require ("./models/Perro");
const Gato = require("./models/Gato")
const Pajaro = require("./models/Pajaro");
const CuentaBancaria = require('./models/CuentaBancaria');
const Pedido = require('./models/Pedido');
const LineItem = require('./models/LineItem');

const pedro = new Persona('Pedro',25);
pedro.saludar();

const cuenta = new CuentaBancaria("Pedro",1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo());

const animal1 = new Perro("Paco");
animal1.hablar();

const Animal2 = new Gato("Mechas");
Animal2.hablar();

const animal3 = new Pajaro("Piolin","Canario");
animal3.hablar();

const pedido1 = new Pedido("P-001");
pedido1.addItem(new LineItem("Manzana",3,1.2));
pedido1.addItem(new LineItem("Pera",2,1.5));
console.log(`Total pedido ${pedido1.total()}`);
const item = pedido1.items[0];
console.log(`item conoce el id del pedido?: ${"id" in item}`);

const Autor =require("./models/Autor");
const Libro =require("./models/Libro");

const autor1 = new Autor(1,"Gabriel Garcia Marquez");
const libro1 = new Libro("","100 años de soledad");
const libro2 = new Libro ("","amor en los tiempos del colera")

console.log(libro1);
console.log(autor1);

