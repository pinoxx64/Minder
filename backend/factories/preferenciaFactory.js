const preferenciaFactory = async (ctos=20) => {
    
    let factory = []
    let lista=[
        {idUsuario: 1, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 2, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 3, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 4, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 5, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 6, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 7, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 8, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 9, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 10, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 11, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 12, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 13, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 14, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 15, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 16, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 17, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 18, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 19, deporte: 50, arte: 50, politico: 50},
        {idUsuario: 20, deporte: 50, arte: 50, politico: 50},

    ]
    for(let i = 0; i < ctos; i++) {
        let preferencia = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(preferencia)
    }
    return Promise.all(factory);
}

module.exports = {
    preferenciaFactory
}