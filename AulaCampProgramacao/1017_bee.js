var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift())
var velocidademedia = parseInt(lines.shift())
var distancia = tempo * velocidademedia
var litros = distancia / 12

console.log(litros.toFixed(3))