function addNaTela(numero) {

   var n =  document.getElementById('resul').innerHTML;
    document.getElementById('resul').innerHTML = n+numero;
}

function limparTela () {
    document.getElementById('resul').innerHTML = "";
}

function calcular (){
    var resultado = document.getElementById('resul').innerHTML;
    if (resultado) {
        operacao = eval (resultado);
        if (Number.isInteger(operacao)) { 
        document.getElementById('resul').innerHTML = operacao;
        } else {
            document.getElementById('resul').innerHTML = operacao.toFixed(6);
        }
    }
}