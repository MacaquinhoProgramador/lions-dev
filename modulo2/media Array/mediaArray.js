let nota = []
let resposta1
let resposta2

console.log('Digite a nota da primeira prova.')
process.stdin.once('data', function(data) {
    resposta1 = parseFloat(data.toString().trim())
    
    console.log('Digite a nota da segunda prova.')
    process.stdin.once('data', function(data) {
        resposta2 = parseFloat(data.toString().trim())
        processamento(resposta1, resposta2)
        process.exit()
    })
})

function processamento(resposta1, resposta2){
nota.push(resposta1)
nota.push(resposta2)
media = (nota[0] + nota[1]) / 2
console.log(`A media é ${media}.`)
}