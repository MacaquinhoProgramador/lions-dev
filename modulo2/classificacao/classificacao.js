var nota = 0
var classificacao = ''

process.stdin.once('data', function(data){
    nota = parseInt(data.toString().trim())
    switch(true) {
        case nota >= 90:
            classificacao = 'A';
            break;
        case nota < 90 && nota >= 80:
            classificacao = 'B';
            break;
        case nota < 80 && nota >= 70:
            classificacao = 'C';
            break;
        case nota < 70 && nota >= 60:
            classificacao = 'D';
            break;
        case nota < 60:
            classificacao = 'F';
            break;
        default:
            console.log('Nota Invalida!');
            break;
    }
    
if(classificacao == 'A' || classificacao == 'B' || classificacao == 'C') {
    console.log(`Parabéns, você passou com a seguinte clasificação: ${classificacao}`)
}else if(classificacao == 'D' || classificacao == 'F'){
    console.log(`Parabéns, você reprovou com a seguinte clasificação: ${classificacao}`)
}else {}

process.exit()
})
