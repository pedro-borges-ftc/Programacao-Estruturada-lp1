//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var distancia = 0
var linha = ''
var valores = []
var linha1 = '3'//lines.shift()
linha1 = parseInt(linha1)

for(i = 0; i < linha1 ; i++){
    linha = '10 3'//lines.shift()
    valores = linha.split(' ')
    console.log(valores)

    distancia += parseInt(valores[0]) * parseInt(valores[1])
}

console.log(distancia)