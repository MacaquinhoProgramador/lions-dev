let somaPar = 0
let somaImpar = 0
let totalPar = 0
let totalImpar = 0

for(let i = 0; i <= 999; i++) {
    if(i % 2 == 0){
        somaPar += i
        totalPar++
    }else{
        somaImpar += i
        totalImpar++
    }
}

let mediaPar = somaPar / totalPar
let mediaImpar = somaImpar / totalImpar

console.log(`${somaPar}`)
console.log(`${somaImpar}`)
console.log(`${totalPar}`)
console.log(`${totalImpar}`)
console.log(`${mediaPar}`)
console.log(`${mediaImpar}`)

if(somaPar > somaImpar) {
    console.log('há mais pares do que impares')
}else if(somaPar < somaImpar){
    console.log('há mais impar do que par')
}else{
    console.log('tem tanto par quanto impar')
}
