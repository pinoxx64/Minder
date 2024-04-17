const ninoPreferenciaFactory = async (ctos=20) => {
    
    let factory = []
    let lista=[
        {idPreferencia: 1, idNino: 1},
        {idPreferencia: 2, idNino: 2},
        {idPreferencia: 3, idNino: 3},
        {idPreferencia: 4, idNino: 4},
        {idPreferencia: 5, idNino: 1},
        {idPreferencia: 6, idNino: 2},
        {idPreferencia: 7, idNino: 3},
        {idPreferencia: 8, idNino: 4},
        {idPreferencia: 9, idNino: 1},
        {idPreferencia: 10, idNino: 2},
        {idPreferencia: 11, idNino: 3},
        {idPreferencia: 12, idNino: 4},
        {idPreferencia: 13, idNino: 1},
        {idPreferencia: 14, idNino: 2},
        {idPreferencia: 15, idNino: 3},
        {idPreferencia: 16, idNino: 4},
        {idPreferencia: 17, idNino: 1},
        {idPreferencia: 18, idNino: 2},
        {idPreferencia: 19, idNino: 3},
        {idPreferencia: 20, idNino: 4}

    ]
    for(let i = 0; i < ctos; i++) {
        let ninoPreferencia = 
            {
            idPreferencia: lista[i].idPreferencia,
            idNino: lista[i].idNino,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(ninoPreferencia)
    }
    return Promise.all(factory);
}

module.exports = {
    ninoPreferenciaFactory
}