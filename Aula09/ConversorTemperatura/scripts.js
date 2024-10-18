//Tema 08 - Aula 03
function conversorTemperaturas(){
    //leitura dos dados do HTML
    var txtfahrenheit = window.document.getElementById("txtfahrenheit")
    var txtcelsius = window.document.getElementById("txtcelsius")

    //Processamento dos dados
    var fahrenheit = Number(txtfahrenheit.value)
    var celsius = 5 / 9 * (fahrenheit  - 32)

    //escrita do resultado no DOM do HTML
    txtcelsius.value = fahrenheit + " ºF = " + celsius.toFixed(2) + " ºC"
}