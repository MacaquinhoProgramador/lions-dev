let nome
let idade

console.log('Digite seu nome.')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Agora digite sua idade.')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    if(idade >= 18) {
        console.log(`${nome}, você já é maior de idade.`)
    }else {
        idade = 18 - idade
        console.log(`${nome}, você será maior de idade em ${idade} ano(s).`)
    }
}