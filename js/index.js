window.onload = function () {
    
    var listaDeProdutos = [
        {
            'nome': 'Celular Teste1',
            'qtdo': 2
        },
        {
            'nome': 'Celular Teste2',
            'qtdo': 3
        },
        {
            'nome': 'Celular Teste5',
            'qtdo': 0
        },
        {
            'nome': 'Celular Teste4',
            'qtdo': 2
        },
        {
            'nome': 'Celular Teste4',
            'qtdo': 2
        }
    ];
    var remover = false;
    var listaSemZero = [];
    var listaSemDuplicados = [];
    var tamanhoLista = listaDeProdutos.length;
    //remover os itens zerados e adicionar num novo array listaSemZero
    for (var i = 0; i < tamanhoLista; i++) {
        var qtdo = listaDeProdutos[i].qtdo;
        //adiciono na lista resultado os itens com valores maiores que zero
        if(qtdo > 0){
            listaSemZero.push(listaDeProdutos[i])
        }
    }
    //guardar o tamanho do array semzero
    var tamanhoListaSemZero = listaSemZero.length;

    //adicionar os valores sem zero ao novo array desde que já não tenha um mesmo item lá
    for (var i = 0; i < tamanhoListaSemZero; i++) {
        var nomeI = listaSemZero[i].nome;
        for (var k = 0; k < listaSemDuplicados.length; k++) {
            if (k != i) {
                var nomek = listaSemZero[k].nome;
                //o nome já está na lista
                if (nomeI == nomek) {
                    remover = true;
                }
            }
        }
        //se o nome não estiver na lista adiciona
        if(!remover){
            listaSemDuplicados.push(listaSemZero[i]) ;
        }
    }
    
    console.log(listaDeProdutos);
    console.log(listaSemZero);
    console.log(listaSemDuplicados);
}


