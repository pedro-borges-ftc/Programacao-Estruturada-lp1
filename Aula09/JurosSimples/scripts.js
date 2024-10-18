function calculadoraJurosSimples(){
    //leitura dos dados do HTML
    var txtvalorinicial = window.document.getElementById("txtvalorinicial")
    var txttaxa = window.document.getElementById("txttaxa")
    var txtperiodo = window.document.getElementById("txtperiodo")
    var txtjuros = window.document.getElementById("txtjuros")
    var txttotal = window.document.getElementById("txttotal")

    //Processamento dos dados
    var valorinicial = Number(txtvalorinicial.value)
    var taxa = Number(txttaxa.value)
    var periodo = Number(txtperiodo.value)

    var juros = valorinicial * taxa / 100 * periodo
    var total = valorinicial + juros

    //escrita do resultado no DOM do HTML
    txtjuros.value =  juros.toFixed(2).replace('.', ',')
    txttotal.value = total.toFixed(2).replace('.', ',')
}