function calcular(valor1, valor2, operacao) {
    if(operacao == '+') {
        return valor1 + valor2

    }else if(operacao == '-') {
        return valor1 - valor2

    }else if(operacao == '*') {
        return valor1 * valor2

    }else {
        return valor1 / valor2
    }

}

console.log(calcular(5, 3, '+'))
console.log(calcular(5, 3, '-'))
console.log(calcular(5, 3, '*'))
console.log(calcular(5, 3, '/'))