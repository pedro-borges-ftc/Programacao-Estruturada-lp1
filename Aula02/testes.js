/*
Este é o primeiro programa em JS
Autor: Peuborg

Exercício - Desafio de Variáveis

Criar as variáveis ‘nome’ e ‘sobrenome’
Atribuir valores a elas
Criar a variável ‘endereço’ e atribuir o valor ‘Rua das casas’
Atribuir um novo valor para ‘endereço’
Imprimir o destinatário no console:
*/
console.log('Leitura dos dados do Teclado')

var prompt = require('prompt');

prompt.start();

prompt.get(['nome', 'sobrenome'], function (err, result) {
    
    var destinatário
    var nome = result.nome
    let sobrenome = result.sobrenome
    var endereço = 'Rua São João\nBairro Centro\nItabuna-BA\nCEP: 45600-000 '
    destinatário  = `\n\nDestinatário: ${nome} ${sobrenome} \nEndereço: ${endereço}`

    console.log(destinatário)
})