let vida = 7
let rodada = 0
let numAleatorio = Math.floor(Math.random() * 100) + 1
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log('Este é um jogo de adivinhação, o computador irá gerar um número aleatório mas você terá de adivinhar qual é.\nSaiba que você tem apenas 8 tentativas para adivinhar, mas fique tranquilo, eu irei avisar se o número é maior ou menor quando você chutar.\n')

function continuacao(){
    rl.question('Digite um número.\n', (resposta) => {
        switch(true){
            case (resposta > numAleatorio):
                vida--
                rodada++
                console.log(`Este valor é maior do que o valor que eu escolhi.\nVidas: ${vida}`)
                continuacao()
                break
            case (resposta < numAleatorio):
                vida--
                rodada++
                console.log(`Este valor é menor do que o valor que eu escolhi.\nVidas: ${vida}`)
                continuacao()
                break
            case (resposta == numAleatorio):
                console.log(`Você ganhou restando ${vida} de vida!`)
                rl.close()
                break
            }
            if(vida == 0){
                console.log(`Sua vidas acabaram, você morreu. A resposta era ${numAleatorio} levando ${rodada} rodadas`)
                rl.close()
            }
        })
}

continuacao()