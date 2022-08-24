 //entrada de dados
 var celsius = Number(window.prompt("Digite um valor ºC a ser convertido:"))

 //processamento dos dados
 var farenheit = 32 + (celsius * 9 / 5)

 //saída dos dados
 var resultado = `${celsius} ºC = ${farenheit} ºF`
 console.log(resultado)
 document.writeln('<h4>Conversor Temperaturas</h4>')
 document.writeln('<p>Abaixo a conversão dos dados</p>')
 document.writeln(resultado)