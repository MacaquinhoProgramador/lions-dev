let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notamax = notas[0]
let notamin = notas[0]
let acimamedia = 0
let reprovados = 0

for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
    soma = soma + notas[i]
    if(notas[i] > notamax){
        notamax = notas[i]
    }
    if(notas[i] < notamin){
        notamin = notas[i]
    }
    if(notas[i] < 6.0){
        reprovados++
    }
}

media = soma / notas.length
for(let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        acimamedia++
    }
}

notas.push(8.0)
console.log(`
Notas da turma: ${notas}\n
Media da turma: ${media}\n
Maior nota da turma: ${notamax}\n
Menor nota da turma: ${notamin}\n
Notas acima da media da turma: ${acimamedia}\n
Reprovados: ${reprovados}
`)