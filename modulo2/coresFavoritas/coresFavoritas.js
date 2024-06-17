let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario

console.log('Digite sua cor favorita.')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    if(coresFavoritas.includes(corDoUsuario)) {
        console.log('A sua cor favorita é uma das favoritas da turma!')
    }else {
        console.log('A cor favorita é diferente, vamos adicionar à lista!')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(`As cores favoritas da sala são: ${coresFavoritas[0]}, ${coresFavoritas[1]}, ${coresFavoritas[2]}`)
    console.log(`A sua cor especial é: ${coresEspeciais}`)
    console.log(`A quantidade de cores favoritas são ${coresFavoritas.length}`)
    process.exit()
})