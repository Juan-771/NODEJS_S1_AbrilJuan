const readline = require('readline');
const moduloCamper = require('./modulo_camper');
const moduloTrainer = require('./modulo_trainer');
const moduloCoordinador = require('./modulo_coordinador');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bienvenido a CampusLands");
console.log("¿Cómo deseas ingresar?");
console.log("1. Camper");
console.log("2. Trainer");
console.log("3. Coordinador");

rl.question(": ", (opt) => {
  if (opt === "1") {
    moduloCamper.inc();
  } else if (opt === "2") {
    moduloTrainer.inc();
    moduloTrainer.verificar_id();
  } else if (opt === "3") {
    moduloCoordinador.inc();
    moduloCoordinador.verificar_iden();
  } else {
    console.log("Opción inválida.");
  }
  rl.close();
});
