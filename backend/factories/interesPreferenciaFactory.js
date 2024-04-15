const interesPreferenciaFactory = async (ctos=20) => {
    
    let factory = []
    let lista=[
        {idPreferencia: 1, idInteres: 1},
        {idPreferencia: 2, idInteres: 1},
        {idPreferencia: 3, idInteres: 3},
        {idPreferencia: 4, idInteres: 1},
        {idPreferencia: 5, idInteres: 2},
        {idPreferencia: 6, idInteres: 3},
        {idPreferencia: 7, idInteres: 1},
        {idPreferencia: 8, idInteres: 2},
        {idPreferencia: 9, idInteres: 3},
        {idPreferencia: 10, idInteres: 1},
        {idPreferencia: 11, idInteres: 2},
        {idPreferencia: 12, idInteres: 3},
        {idPreferencia: 13, idInteres: 1},
        {idPreferencia: 14, idInteres: 2},
        {idPreferencia: 15, idInteres: 3},
        {idPreferencia: 16, idInteres: 1},
        {idPreferencia: 17, idInteres: 2},
        {idPreferencia: 18, idInteres: 3},
        {idPreferencia: 19, idInteres: 1},
        {idPreferencia: 20, idInteres: 2}

    ]
    for(let i = 0; i < ctos; i++) {
        let interesPreferencia = 
            {
            idPreferencia: lista[i].idPreferencia,
            idInteres: lista[i].idInteres,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(interesPreferencia)
    }
    return Promise.all(factory);
}

module.exports = {
    interesPreferenciaFactory
}