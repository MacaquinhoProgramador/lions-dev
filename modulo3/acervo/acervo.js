const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let produto = []

menuExecutar()
function menuExecutar(){
    console.log(`
        1. Cadastrar produto.
        2. Listar produtos.
        3. Editar produto.
        4. Remover produto.
        5. Sair do programa.
    `)
    rl.question('Comando à executar:', (opcao) => {
        switch(opcao){
            case '1':
                cadastrar()
                break
            case '2':
                listar()
                break
            case '3':
                editar()
                break
            case '4':
                remover()
                break
            case '5':
                rl.close()
                break
            case '69':
                console.log('você é muito safadinho, pare com isso.')
                menuExecutar()
                break
            default:
                console.log('Comando invalido')
                menuExecutar()
                break
        }
    })
}

function cadastrar(){
    rl.question('Digite o nome do produto: ', (nomeProduto) => {
        rl.question('Digite o tipo do produto: ', (tipoProduto) => {
            rl.question('Digite o genero do produto: ', (generoProduto) => {
                rl.question('Digite o preço do produto: ', (precoProduto) => {
                    produto.push({
                        nome: nomeProduto, 
                        tipo: tipoProduto, 
                        genero: generoProduto, 
                        preço: parseFloat(precoProduto)
                    })
                    console.log('Produto cadastrado com sucesso!')
                    menuExecutar()
                })
            })
        })  
    })
}

function listar(){
    if(produto == 0){
        console.log('Não há nenhum produto cadastrado.')
        menuExecutar()
    }else{
        for(let i = 0; i < produto.length; i++){
            console.log(`${i + 1}:`, produto[i])
        }
        rl.question('Precione "ENTER" para voltar ao menu.\n', (voltar) => {
                menuExecutar()
        })
    }
}

function editar(){
    if(produto == 0){
        console.log('Não há nenhum produto cadastrado.')
        menuExecutar()
    }else{
        for(let i = 0; i < produto.length; i++){
            console.log(`${i + 1}: `, produto[i])
        }
        rl.question('Qual produto deseja editar?\n', (edicao) => {
            rl.question('Digite o nome.\n', (nome) => {
                rl.question('Digite o tipo.\n', (tipo) => {
                    rl.question('Digite o genero.\n', (genero) => {
                        rl.question('Digite o preço\n', (preco) => {
                            produto[edicao - 1] = {
                                nome,
                                tipo,
                                genero,
                                preco
                            }
                            console.log('Produto editado com sucesso!')
                            rl.question('Precione "ENTER" para voltar ao menu.\n', (voltar) => {
                                menuExecutar()
                            })
                        })
                    })
                })
            })  
        })
    }
}

function remover(){
    if(produto == 0){
        console.log('Não há nenhum produto cadastrado.')
        menuExecutar()
    }else{
        for(let i = 0; i < produto.length; i++){
            console.log(`${i + 1}: `, produto[i])
        }
        rl.question('Qual produto deseja remover?\n', (remocao) => {
            if(remocao > 0 && remocao <= produto.length){
                produto.splice(remocao - 1, 1)
                console.log('produto removido com sucesso!')
                menuExecutar()
            }
        })
    }
}
