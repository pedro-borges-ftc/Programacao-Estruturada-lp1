//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var linha = '34 55 77 12 23 99'//lines.shift()
var conector1 = linha.split(' ')
console.log(conector1)

var linha = '5 3 77 55 42 34'//lines.shift()
var conector2 = linha.split(' ')
console.log(conector2)

var resposta = 0

for (i = 0; i < 6; i++) {
    if (conector1.indexOf(conector2[i]) >= 0 ) {
        resposta++
    }
}

console.log(resposta)

switch (resposta) {
    case 3:
        console.log('terno')
        break
    case 4:
        console.log('quadra')
        break
    case 5:
        console.log('quina')
        break
    case 6:
        console.log('sena')
        break
    default:
        console.log('azar')
}

