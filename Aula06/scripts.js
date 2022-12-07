function calcularReajusteSalarial() {
    //leitura dos dados do HTML
    var salario = Number(document.getElementById("txtsalarioatual").value)
    var percentual = 0.0
    var reajuste = 0.0
    var novosalario = 0.0

    //Processamento dos dados    
    if (salario <= 1280) {
        percentual = 0.2            //20%
    } else if (salario <= 2700) {
        percentual = 0.15           //15%
    } else if (salario <= 3500) {
        percentual = 0.1            //10%
    } else {
        percentual = 0.05           //05%
    }

    reajuste = salario * percentual
    novosalario = salario + reajuste

    //escrita do resultado no DOM do HTML
    document.getElementById("txtperc").value = (percentual * 100).toFixed(2)
    document.getElementById("txtreajuste").value = reajuste.toFixed(2)
    document.getElementById("txtnovosalario").value = novosalario.toFixed(2)
}