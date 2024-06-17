let nome
let idade
const anoAtual = 2024
let escolha

console.log('Qual é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('Você já fez aniversário?')
        process.stdin.once('data', function(data) {
            escolha = data.toString().trim()
            processamento(nome, idade, escolha)
            process.exit()
        })
    })
})

function processamento(nome, idade, escolha) {
    if (escolha === 'sim') {
        idade = idade
    }else if (escolha === 'nao') {
        idade = idade + 1
    }else {
        console.error('Houve um erro! Por favor, tente novamente.')
        process.exit()
    }
    idade = anoAtual - idade
    console.log(`Olá ${nome}, você é de ${idade}!`)
}

