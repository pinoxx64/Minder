const chatFactory = async (ctos=2) => {
    
    let factory = []
    let lista=[
        {idUsuario1: 1, idUsuario2: 2},
        {idUsuario1: 2, idUsuario2: 3}
    ]
    for(let i = 0; i < ctos; i++) {
        let chat = 
            {
            idUsuario1: lista[i].idUsuario1,
            idUsuario2: lista[i].idUsuario2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(chat)
    }
    return Promise.all(factory);
}

module.exports = {
    chatFactory
}