let nome
let idade
let escolha
const anoAtual = 2024

console.log('Digite seu nome.')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Digite sua idade.')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('Vocẽ já fez aniversario?')

        process.stdin.once('data', function(data) {
            escolha = data.toString().trim()
            processamento(nome, idade, escolha)
            process.exit()
        })
    })
})

function processamento(nome, idade, escolha){
    idade = anoAtual - idade
    if(escolha == 'sim') {
        idade = idade
    }else if(escolha == 'nao'){
        idade --
    }else {
        console.error('Ocorreu um erro. Tente novamente.')
        process.exit()
    }
    console.log(`${nome}, você nasceu em ${idade}.`)
}