//Entrada de dados
var peso = 120     //em kg
var altura = 1.65   //em m

//Processamento
//var imc = peso / (altura ** 2)
var imc = peso / (altura * altura)

//Saída
if(imc < 18.5){
    console.log("IMC = " + imc.toFixed(2) + ". Baixo peso")
}
else if(imc >= 18.5 && imc <= 25){
    console.log("IMC = " + imc.toFixed(2) + ". Peso normal")
}
else if(imc > 25 && imc <= 30){
    console.log(`IMC = ${imc.toFixed(2)}. Sobrepeso`)
}
else if(imc >30 && imc <= 35){
    console.log(`IMC = ${imc.toFixed(2)}. Obesidade grau I`)
}
else if(imc >35 && imc <= 40){
    console.log(`IMC = ${imc.toFixed(2)}. Obesidade grau II`)
}
else{
    console.log(`IMC = ${imc.toFixed(2)}. Obesidade grau III`)
}