function inserirProdutoCarrinho(){
    let codigo = Number(document.getElementById("txtcodigo").value)
    let quantidade = Number(document.getElementById("txtquantidade").value)
    let totalPedido = Number(document.getElementById("txttotalpedido").value)
    let resultado = ''
    let totalItem = 0.0
    console.log(codigo + " " + quantidade + " " + totalPedido)

    switch (codigo) {
        case 100://Cachorro Quente R$ 1,20
            totalItem = quantidade * 1.2
            resultado += `<p>${codigo} - Cachorro quente - ${quantidade} - R$ 1,20 = ${totalItem.toFixed(2)}</p>`
            break;
        case 101://Baurú Simples R$ 1,30
            totalItem = quantidade * 1.3
            resultado += `<p>${codigo} - Baurú Simples - ${quantidade} - R$ 1,30 = ${totalItem.toFixed(2)}</p>`
            break;
        case 102://Bauru com ovo R$ 1,50
            totalItem = quantidade * 1.5
            resultado += `<p>${codigo} - Bauru com ovo - ${quantidade} - R$ 1,50 = ${totalItem.toFixed(2)}</p>`
            break;
        case 103://Hambúrguer R$ 1,20
            totalItem = quantidade * 1.2
            resultado += `<p>${codigo} - Hambúrguer - ${quantidade} - R$ 1,20 = ${totalItem.toFixed(2)}</p>`
            break;
        case 104://Cheeseburguer R$ 1,30
            totalItem = quantidade * 1.3
            resultado += `<p>${codigo} - Cheeseburguer  - ${quantidade} - R$ 1,30 = ${totalItem.toFixed(2)}</p>`
            break;
        case 105://Refrigerante  R$ 1,00
            totalItem = quantidade * 1.0
            resultado += `<p>${codigo} - Refrigerante  - ${quantidade} - R$ 1,00 = ${totalItem.toFixed(2)}</p>`
            break;
        default:
            break;
    }
    totalPedido += totalItem
    
    document.getElementById('divcarrinho').innerHTML += resultado
    document.getElementById('txttotalpedido').value = `${totalPedido.toFixed(2)}`
}