let numero1 = prompt("Qual o valor do primeiro número?");
let numero2 = prompt("Qual o valor do segundo número?");
let operacao = prompt("Qual operação vc gostaria de realizar?","+,-,*,/");
let num1 = parseInt(numero1);
let num2 = parseInt(numero2);
var resultado;
function calculadora () {
    if (operacao == "+") {
        return resultado = num1 + num2;
    } 
    else if (operacao == "-") {
        return resultado = num1 - num2;
    }
    else if (operacao == "*") {
        return resultado = num1 * num2
    }
    else if (operacao == "/") {
        return resultado = num1 / num2
    }
    else{
        return resultado = "Simbolo Incorreto"
    }
}
calculadora(operacao)
alert(resultado)