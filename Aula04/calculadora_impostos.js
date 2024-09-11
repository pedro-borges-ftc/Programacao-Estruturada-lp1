//Tema 08 - Aula 04
function calculadoraImpostos(){
    //leitura dos dados do HTML
    var txtproduto = window.document.getElementById("txtproduto")
    var txtimposto = window.document.getElementById("txtimposto")
    var txttotalproduto = window.document.getElementById("txttotalproduto")

    //Processamento dos dados
    var produto = Number(txtproduto.value)
    var imposto = produto * 60 / 100
    var totalproduto = produto + imposto

    //escrita do resultado no DOM do HTML
    txtimposto.value =  imposto.toFixed(2).replace('.', ',')
    txttotalproduto.value = totalproduto.toFixed(2).replace('.', ',')
}
function validaValorProduto(){
    var txtproduto = window.document.getElementById("txtproduto")
    if(Number(txtproduto.value) <= 0){
        txtproduto.style.background = "yellow"
        alert('Valor do produto é obrigatório.')
        return false
    }else{
        txtproduto.style.background = "white"
        return true
    }
}