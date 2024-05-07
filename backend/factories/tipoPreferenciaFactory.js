const tipoPreferenciaFactory = async (ctos=20) => {
    
    let factory = []
    let lista=[
        {idPreferencia: 1, idTipo: 1},
        {idPreferencia: 2, idTipo: 2},
        {idPreferencia: 3, idTipo: 1},
        {idPreferencia: 4, idTipo: 2},
        {idPreferencia: 5, idTipo: 1},
        {idPreferencia: 6, idTipo: 2},
        {idPreferencia: 7, idTipo: 1},
        {idPreferencia: 8, idTipo: 2},
        {idPreferencia: 9, idTipo: 1},
        {idPreferencia: 10, idTipo: 2},
        {idPreferencia: 11, idTipo: 1},
        {idPreferencia: 12, idTipo: 2},
        {idPreferencia: 13, idTipo: 1},
        {idPreferencia: 14, idTipo: 2},
        {idPreferencia: 15, idTipo: 1},
        {idPreferencia: 16, idTipo: 2},
        {idPreferencia: 17, idTipo: 1},
        {idPreferencia: 18, idTipo: 2},
        {idPreferencia: 19, idTipo: 1},
        {idPreferencia: 20, idTipo: 2}

    ]
    for(let i = 0; i < ctos; i++) {
        let tipoPreferencia = 
            {
            idPreferencia: lista[i].idPreferencia,
            idTipo: lista[i].idTipo,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(tipoPreferencia)
    }
    return Promise.all(factory);
}

module.exports = {
    tipoPreferenciaFactory
}