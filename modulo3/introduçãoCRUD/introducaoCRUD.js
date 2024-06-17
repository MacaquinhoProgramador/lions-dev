const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar funcionários
	3. Mostrar funcionário de maior salário
	4. Editar funcionario
	5. Remover funcionário
	6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
            case '2':
                listarFuncionarios()
                break
            case '3':
                listarMaiorSalario()
                break                
			case '4':
				editar()
				break
			case '5':
				remover()
				break
			case '6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios(){
	if(funcionarios.length === 0){
		console.log('Não há nenhum funcionário.')
    }else{
		for(let i = 0; i < funcionarios.length; i++){
		console.log(i + 1, funcionarios[i])
	}
	}
    rl.question('Digite "voltar" para voltar ao menu.\n', (voltar) => {
		if(voltar == 'voltar'){
        	exibirMenu()
		}else{
			console.log('Valor incorreto')
			listarFuncionarios()
		}
    })
}

function listarMaiorSalario(){
	if(funcionarios.length === 0){
		console.log('Não há nenhum funcionário.')
	}else{
		let maiorSalario = funcionarios[0]
    	for(let i = 0; i < funcionarios.length; i++){
        	if(funcionarios[i].salario > maiorSalario.salario){
            	maiorSalario = funcionarios[i]
        	}
    	}
		console.log(maiorSalario)
	}
    
    rl.question('Digite "voltar" para voltar ao menu.\n', (voltar) => {
        if(voltar == 'voltar'){
        	exibirMenu()
		}else{
			console.log('Valor incorreto')
			listarMaiorSalario()
		}
    })
}

function editar() {
	if (funcionarios.length === 0) {
	console.log('Não há funcionários para editar.')
	exibirMenu()
	} else {
		for(let i = 0; i < funcionarios.length; i++){
			console.log(i + 1, funcionarios[i])
		}
		rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				rl.question('Digite a nova propriedade 1: ', (nome) => {
					rl.question('Digite a nova propriedade 2: ', (cargo) => {
						rl.question('Digite a nova propriedade 3: ', (salario) => {
							funcionarios[numero - 1] = {
								nome,
								cargo,
								salario
							}
							console.log('editado com sucesso!')
							rl.question('Digite "voltar" para voltar ao menu.\n', (voltar) => {
								if(voltar == 'voltar'){
									exibirMenu()
								}else{
									console.log('Valor incorreto')
									editar()
								}
							})
						})
					})
				})
			} else {
				console.log('Número inválido, tente novamente.')
			}
		})
	
	}
}

function remover() {
	if (funcionarios.length == 0) {
		console.log('Nada cadastrado.')
		exibirMenu()
	} else {
		console.log('Lista de elementos')
		for(let i = 0; i < funcionarios.length; i++){
			console.log(i + 1, funcionarios[i])
		}
		rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				funcionarios.splice(numero - 1, 1)
				console.log('Elemento removido com sucesso!')

				rl.question('Digite "voltar" para voltar ao menu.\n', (voltar) => {
					if(voltar == 'voltar'){
						exibirMenu()
					}else{
						console.log('Valor incorreto')
						editar()
					}
				})
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}