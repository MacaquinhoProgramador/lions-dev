function calcular(valor1, valor2, operacao) {
    switch(operacao){
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            console.log('Operador Invalido!')
    }
}

console.log(calcular(5, 3, '+'))
console.log(calcular(5, 3, '-'))
console.log(calcular(5, 3, '*'))
console.log(calcular(5, 3, '/'))