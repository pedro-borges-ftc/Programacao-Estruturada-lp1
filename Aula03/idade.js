/*
Autor: Peuborg

Exercício - Calcular Idade

Criar algoritmo para calcular a idade do usuário.
Neste caso, será solicitado que o usuário digite o ano atual e o ano de seu nascimento. 
Após o cálculo, devemos exibir a idade do usuário em anos. 

PS: esse algoritmo não leva em consideração os meses ou dias para realização do cálculo.

*/
console.log('Cálculo da Idade')

var prompt = require('prompt');

prompt.start();

prompt.get(['AnoNascimento'], function (err, result) {
    //
    const dataAtual = new Date();
    const anoAtual = dataAtual. getFullYear();
    
    //Leitura dos dados
    var AnoNascimento = result.AnoNascimento

    //Processamento dos dados
    var idade = anoAtual - AnoNascimento   

    //Saída dos resultados
    console.log(`A Idade é ${idade} ano(s)`)
})