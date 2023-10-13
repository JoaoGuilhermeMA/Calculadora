let display = document.getElementById('displayId');
let conta = "";
let feito = false;

function adicionarNumero(numero) {
    if (feito) {
        display.value = "";
        conta = "";
        feito = false;
    }
    display.value = display.value + numero;
    conta = conta + numero;
    
}

function limparTela() {
    display.value = "";
    conta = "";
}

function deletar(){
    display.value = display.value.substring(0, display.value.length - 1);
    conta = conta.substring(0, conta.length -1);
}

function operacao(operador) {
    if (display.value == "") {
        alert("Coloque um numero primeiro, CABAÇO!!!");
        return;
    }
    const ultimoCaractere = conta.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        alert("Não é permitido adicionar dois operadores consecutivos, CABAÇO!!!");
        return;
    }
    display.value = display.value + operador;
    if (operador == '+' || operador == '-') {
        conta = conta + operador;
    }
    switch (operador) {
        case 'x':
            conta = conta + '*';
            break;
        case '÷':
            conta = conta + '/';
            break;
        default:
            break;
    }
}

function calcular() {
    conta = eval(conta)
    display.value = conta;
    feito = true;
}