const prompt = require('prompt-sync')()

console.log('Bem vindo(a) à calculadora do Guilherme.')

let a = ''
let b = ''
let ope = ''
let res = 0

function perguntar(){
    a = Number(prompt('Digite o primeiro valor: '))
    ope = prompt('Digite a operação: ')
    b = Number(prompt('Digite o segundo valor: '))
    if (isNaN(a)) {
        console.log('Primero número invalido!')
        perguntar()
    } else if(isNaN(b)){
        console.log('Segundo valor invalido!')
        perguntar()
    }else {
        calculadora()
    }
}
perguntar()



function calculadora(){
    switch (ope) {
        case '+':
            res = a + b
            console.log(`A resposta é: ${res}`)
            break
        case '-':
            res = a - b
            console.log(`A resposta é: ${res}`)
            break
        case '*':
            res = a * b
            console.log(`A resposta é: ${res}`)
            break
        case '/':
            res = a / b
            console.log(`A resposta é: ${res}`)
            break
        case '%':
            res = (a / 100) * b
            console.log(`A resposta é: ${res}`)
            break

        default:
            console.log('Operador invalido!')
            perguntar()
            break
    }
}