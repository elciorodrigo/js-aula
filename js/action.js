
var valor_a;
var valor_b;

function clickar() {
    alert(teste);
}

function somar() {
    var valor_a = recuperarValores("valor_a");
    var valor_b = recuperarValores("valor_b");
    var result = valor_a + valor_b;
    alert(result);
}

function subtrair() {
    var valor_a = recuperarValores("valor_a_s");
    var valor_b = recuperarValores("valor_b_s");
    var result = valor_a - valor_b;
    alert(result);
}

function mult() {
    var valor_a = recuperarValores("mult_a");
    var valor_b = recuperarValores("mult_a");
    var result = valor_a * valor_b;
    alert(result);
}

function div() {
    var valor_a = recuperarValores("div_a");
    var valor_b = recuperarValores("div_b");

    if (valor_b == 0) {
        alert('Não é possível dividir por 0');
        return;
    }
    var result = valor_a / valor_b;
    alert(result);
}

function validaValor(componente) {
    if (!componente.value) {
        alert('É preciso digitar um valor para efetuar operações');
    } 
}

function recuperarValores(nomeCampo) {
    var valor_x = document.getElementById(nomeCampo).value;
    return valor_x;
}

function mudarCor(id){
    component = document.getElementById(id);
    document.body.style.backgroundColor = component.value;
}

function mudarValor(component){
    document.getElementById("troca").value = component.value;
}