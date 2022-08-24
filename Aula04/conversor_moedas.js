 //entrada de dados
 var valor_real = Number(window.prompt("Digite um valor (R$) a ser convertido:"))

 //processamento dos dados
 var valor_dolar = valor_real / 5.3

 //saída dos dados
 var resultado = `${valor_real.toFixed(2)} reais = ${valor_dolar.toFixed(2)} dólares`
 console.log(resultado)
 document.writeln('<h4>Conversor Moedas</h4>')
 document.writeln('<p>Abaixo a conversão dos dados</p>')
 document.writeln(resultado)