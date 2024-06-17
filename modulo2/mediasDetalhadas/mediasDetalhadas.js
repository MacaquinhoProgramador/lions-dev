// declara as variaveis
let notas = [75, 45, 46, 54, 63, 54, 97, 67, 69, 84]
let soma = 0
let media = 0
let maior = notas[0]
let menor = notas[0]
let acimaDaMedia = 0
let reprovados = 0

// algoritmo de repetição para somar todos os valores / escolher a maior nota / escolher a menor nota / contar número de reprovados
for(let i = 0; i < notas.length; i++){
    soma += notas[i]    // soma as notas do vetor
    if(notas[i] > maior){    // diz qual a maior nota
        maior = notas[i]
    }
    if(notas[i] < menor){    // diz qual a menor nota
        menor = notas[i]
    }
    if(notas[i] < 80){  // conta quantas pessoas reprovaram com nota abaixo de 80
        reprovados++
    }
}

media = soma / notas.length     // calcula a media da sala toda
for(let i = 0; i < notas.length; i++){
    if(notas[i] >= media){     // conta quantas pessoas ficaram acima da media da sala toda
        acimaDaMedia++
    }
}

notas.push(78)      // adiciona nova nota ao vetor notas

console.log(`A media da turma é: ${media}\nA maior nota da turma foi: ${maior}\nA menor nota da turma foi: ${menor}\nO número de notas acima da média da turma é: ${acimaDaMedia}\nNova atualização das notas da turma: ${notas}\nO números de reprovados foi: ${reprovados}`), 
process.exit()
