//Codigo não funcionando!!!!!!!!!!!!!!!!!!

let contatos = [{id: 27, nome: 'gabriel'}, {id: 7, nome: 'guiga'}]

let contato = [{id: 2, nome: 'sobra'}]

function adicionarContato(contato){
    contato.id = contatos.length + 1;

    let jaExiste = contatos.find(cont => cont.nome === contato.nome);
    if (jaExiste) {
        throw new Error('Ja exiswte essa budega');
    }else {
        contato,push(contato)
    }
}

adicionarContato();