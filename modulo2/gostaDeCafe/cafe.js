let entrada
let gostaDeCafe

console.log('Você gosta de café?')
process.stdin.once('data', function(data) {
    entrada = data.toString().trim()
    processamento(entrada)
    process.exit()
})

function processamento(entrada) {
    if(entrada == 'sim') {
        gostaDeCafe = true
    }else if(entrada == 'nao'){
        gostaDeCafe = false
    }else {
        console.log('Eu como terra')
        process.exit()
    }

    if(gostaDeCafe == true) {
        console.log('Uhmmmm, café é muito bom, pena que hoje não teve café ;-;')
    }else {
        console.log('Então não teve café hoje porque você zicou o rolê >:(')
    }
}

