const usuarioEventoFactory = async (ctos=4) => {
    
    let factory = []
    let lista=[
        {idEvento: 1, idUsuario: 1},
        {idEvento: 2, idUsuario: 2},
        {idEvento: 1, idUsuario: 3},
        {idEvento: 2, idUsuario: 4}
    ]
    for(let i = 0; i < ctos; i++) {
        let usuarioEvento = 
            {
            idEvento: lista[i].idEvento,
            idUsuario: lista[i].idUsuario,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(usuarioEvento)
    }
    return Promise.all(factory);
}

module.exports = {
    usuarioEventoFactory
}