function listarResidencias(residencias) {
    if(residencias.length === 0){
        console.log('Não há residencias cadastradas.');
        return;
    }else {
        console.log('   =======================================================================================')
        residencias.forEach((residencia, index) => {
            console.log(`
        ${index + 1}. 
        Nome do proprietario: ${residencia.proprietario}
        Endereço da casa: ${residencia.endereco}
        Tipo de casa: ${residencia.tipoCasa}
        Número do cartão frente e verso: ${residencia.contaBancaria}
    
        =======================================================================================
    
        `)
        });
    
    }
}

module.exports = { listarResidencias }