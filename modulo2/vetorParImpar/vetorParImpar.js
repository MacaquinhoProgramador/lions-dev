let principal = [27, 10, 3, 0, 20, 5, 6, 3]
let entrada = []
let par = []
let impar = []

console.log(`O vetor principal atual é ${principal}`)
process.stdin.once('data', function(data){
    entrada = parseInt(data.toString().trim())
    principal.push(entrada)
    for(let i = 0; i < principal.length; i++){
        if(principal[i] % 2 == 0){
            par.push(principal[i])
        }else {
            impar.push(principal[i])
        }
    }
    console.log(`O vetor principal é: ${principal}\nO vetor de números pares é: ${par}\nO vetor de números impares é: ${impar}`)
    process.exit()
})