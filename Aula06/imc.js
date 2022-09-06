//Entrada de dados
var peso = 65      //em kg
var altura = 1.65   //em m

//Processamento
//var imc = peso / (altura ** 2)
var imc = peso / (altura * altura)

//Saída
if(imc <= 25 && imc >= 18.5){
    console.log("IMC = " + imc.toFixed(2) + ". Você está no peso ideal")
}else{
    console.log(`IMC = ${imc.toFixed(2)}. Você NÃO está no peso ideal`)
}