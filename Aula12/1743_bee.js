var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines.shift()
var conector1 = linha.split(' ')

var linha = lines.shift()
var conector2 = linha.split(' ')

var resposta = 'Y'

for(i = 0; i < 5 ; i++){
    if((parseInt(conector1[i]) + parseInt(conector2[i])) != 1){
        resposta = 'N'
        break
    }
}

console.log(resposta)