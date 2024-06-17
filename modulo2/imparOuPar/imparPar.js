let num

console.log('Digite um número')
process.stdin.once('data', function(data) {
    num = data.toString().trim()
    processamento(num)
    process.exit()  
})

function processamento(num) {
    if(num == 0) {
        console.log('Isto é um 0!')
    }else if(num % 2 == 0) {
        console.log(`É um número é par!`)
    }else {
        console.log(`É um número é impar!`)
    }
    process.exit()
}


