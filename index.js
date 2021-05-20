const BMW = require('./js/Lengvosios/BMW');
const Tesla = require('./js/Lengvosios/Tesla');
const Volvo = require('./js/Lengvosios/Volvo');
const Gaz = require('./js/Motociklai/Gaz');

const pilkasBMW = new BMW ('BMW', 'Left', 5, 4);
const pilkaTesla = new Tesla('Tesla', 'Left', 5, 4);
const baltasVolvo = new Volvo('Volvo', 'Right', 5, 4);

const juodasGaz = new Gaz('Gaz', 2, true)

pilkasBMW.turnOnTheEngine()
console.log(juodasGaz);

