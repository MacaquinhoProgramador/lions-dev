# Calculadora do Guilherme

## Sua calculadora funcional

Basicamente o programa se trata de uma calculadora que realiza alguns calculos básicos. Segue alguns exemplos:

- Soma
- Subtração
- Multiplicação
- Divisão
- Porcentagem

O código inicia fazendo três perguntas que são o primeiro valor, o tipo de operação e o segundo valor. Isso é feito a partir de uma função que verifica se os valores de números são números de fato, caso não seja ele pergunta de novo, caso esteja tudo correto ele chama a função calcular.

``` javascript
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
```
Após ele confirmar que estão corretos os valores ele verifica qual operador foi digitado e já realiza a operação com os valores já inseridos a partir de outra função.
```javascript
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
```
Contudo o programa se trata de uma calculadora simples que faz operações simples.