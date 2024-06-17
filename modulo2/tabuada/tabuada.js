var entrada
var i
var saida

console.log('Digite o número para mostrar a tabuada do mesmo.')
process.stdin.once('data', function(data) {
    entrada = parseInt(data.toString().trim())
    console.log(`A tabuada do ${entrada} é:`)

    for(i = 1; i <= 10; i++) {

        while(saida >= 100){
            process.exit()
        }

        console.log(`${i} x ${entrada} = ${saida = i * entrada}`)
    }
    
    process.exit()
})
