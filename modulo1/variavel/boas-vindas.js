var nome = ''
console.log("Ponhe teu nome")

process.stdin.on('data', function(data) {

    let nome = data.toString();
    var saudacao = 'Olá, ' + nome
    console.log(saudacao)
    process.exit()
})