var numero = 556

var hora = parseInt(numero / 3600)
numero -= hora*3600
var minuto = parseInt(numero / 60)
numero -= minuto*60
var segundo = numero

console.log(`${hora}:${minuto}:${segundo}`)