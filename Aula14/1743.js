//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

var linha = '1 1 0 1 0'//lines.shift()
console.log(linha)
var conector1 = linha.split(' ')
console.log(conector1)

var linha = '0 0 1 0 1'//lines.shift()
console.log(linha)
var conector2 = linha.split(' ')
console.log(conector2)

var resposta = 'Y'

for(i = 0; i < 5 ; i++){
    if((parseInt(conector1[i]) + parseInt(conector2[i])) != 1){
        resposta = 'N'
        break
    }
}

console.log(resposta)