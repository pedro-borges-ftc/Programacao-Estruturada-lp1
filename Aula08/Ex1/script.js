function CalcularIdade(){
    let dataNascimento = document.getElementById("txtdatanasc").value
    let resultado = ''
    
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    // Verifica se o mês atual é antes do mês de nascimento ou se é o mês de nascimento mas o dia ainda não passou.
    if (mes < 0 || (mes === 0 && hoje.getDate() <= nascimento.getDate())) {
        idade--;
    }

    resultado = `<p> A idade é ${idade} <\p>`

    if (idade < 18){
        resultado += `<p>O usuário é menor de idade.<\p>`
    }else{
        resultado += `<p>O usuário já é de maior.<\p>`
    }

    document.getElementById('divresultado').innerHTML = resultado
}
