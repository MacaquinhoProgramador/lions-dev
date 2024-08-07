function listarContatos(contatos) {
    if(contatos.length === 0){
        console.log('Não há itens na lista.')
    }else{
        contatos.forEach(contato => {
            console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });

    }
}
module.exports = { listarContatos }