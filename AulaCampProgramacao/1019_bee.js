var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());

var hora = parseInt(numero / 3600)
numero -= hora*3600
var minuto = parseInt(numero / 60)
numero -= minuto*60
var segundo = numero

console.log(`${hora}:${minuto}:${segundo}`)