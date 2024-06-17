let nota1
let nota2
let media

console.log('Digite sua primeira nota.')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())

    console.log('Digite sua segunda nota.')
    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        
        media = (nota1 + nota2) / 2

        if(media < 8) {
            console.log(`Você reprovou com a seguinte nota: ${media}!`)
        }else {
            console.log(`Você passou com a seguinte nota: ${media}!`)
        }

        process.exit()

    })
})