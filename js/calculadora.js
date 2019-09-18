function adiciona(novoValor) {
    var valor = document.getElementById("visor").value;
    document.getElementById("visor").value = valor + novoValor;
}

function limpar(){
    document.getElementById("visor").value = '';
}
