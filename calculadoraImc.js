const input = require("readline-sync");

// 1. função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
function cabecalho() {
    console.log('===============================');
    console.log('Calculadora IMC');
    console.log('===============================');
}

// função tradicional com parâmetros e um retorno de valor;
function resultadoImc(valorImc) {
    if (imc < 18.5) {
        return 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal'
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade Grau II';
    } else if (imc >= 40) {
        return 'Obesidade Grau III'
    }
}

// arrow function com parâmetros e que retorne um valor; 
const calculaImc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

cabecalho();
let nome = input.question('Informe o seu nome: ');
let peso = input.questionFloat('Informe o seu peso: ');
let altura = input.questionFloat('Informe a sua altura: ');
let imc = calculaImc(peso, altura);
let status = resultadoImc(imc);
console.log(`Nome do Paciente: ${nome} | IMC ${imc} | Status IMC: ${status}`);