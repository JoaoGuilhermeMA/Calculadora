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

function pegarPI() {
    let nPI = Math.PI;
    display.value = display.value + nPI;
    conta = conta + nPI;
}

function cacularRaiz(simbolo) {
    let numero = eval(conta)
    numero = Math.sqrt(numero);
    display.value = numero;
}

function calcular() {
    conta = eval(conta)
    display.value = conta;
    feito = true;
}

function potencia() {
    const base = parseFloat(display.value);
    const expoente = prompt("Digite o expoente:");

    if (!isNaN(base) && !isNaN(expoente)) {
        const resultado = Math.pow(base, expoente);
        display.value = resultado;
        conta = resultado.toString();
    } else {
        alert("Insira um número válido como base e expoente.");
    }
}

function calcularFatorial() {
    let numero = eval(conta)
    if (numero === 0 || numero === 1) {
      display.value = 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      display.value = resultado;
    }
}

function adicionarPorcentagem() {
    if (conta === "") {
        alert("Digite um número antes de usar a porcentagem.");
        return;
    }

    const ultimoCaractere = conta.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        alert("Não é permitido adicionar uma porcentagem após um operador.");
        return;
    }

    const valorNoVisor = parseFloat(display.value);
    const porcentagem = parseFloat(prompt("Digite a porcentagem que você deseja calcular:"));

    if (!isNaN(porcentagem)) {
        const resultado = (valorNoVisor * (porcentagem / 100)).toFixed(2);

        display.value = resultado;
        conta = resultado.toString();
    } else {
        alert("Porcentagem inválida. Digite um número válido para a porcentagem.");
    }
}

let pilha = [];
function alternarParenteses() {
    if (display.value === "") {
        pilha.push('(');
        display.value = display.value + pilha[pilha.length - 1];
        return;
    }
    if (display.value.slice(-1) === '+' || display.value.slice(-1) === '-' || display.value.slice(-1) === 'x' || 
    display.value.slice(-1) === '÷') {
        pilha.push('(');
        display.value = display.value + pilha[pilha.length - 1];
        return;
    }
    if (pilha[pilha.length - 1] === '(') {
        pilha.pop();
        display.value = display.value + ')';
    }
}

function adicionarPonto() {
    if (display.value === "" || ['+', '-', 'x', '÷'].includes(display.value.slice(-1))) {
        alert("Não pode adicionar uma virgula agora seu CABAÇO!!!");
        return;
    }
    display.value += ',';
    conta += '.';
}
