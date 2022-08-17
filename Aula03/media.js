/*
Autor: Peuborg

Exercício - Calcular Média

Criar algoritmo para calcular a média de duas notas.

Neste caso, será solicitado que o usuário digite as duas notas. 

Após o cálculo, devemos exibir a média das notas.

*/
console.log('Cálculo da Média')

var prompt = require('prompt');

prompt.start();

prompt.get(['nota01', 'nota02'], function (err, result) {
    
    //Leitura dos dados
    var nota01 = Number(result.nota01)
    var nota02 = Number(result.nota02)

    //Processamento dos dados
    var media = (nota01 + nota02) / 2   

    //Saída dos resultados
    console.log(`A média das notas ${nota01} e ${nota02} é ${media}`)
})