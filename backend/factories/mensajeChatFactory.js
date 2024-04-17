const mensajeChatFactory = async (ctos=2) => {
    
    let factory = []
    let lista=[
        {idChat: 1, mensaje: 'hola', idUsuario: 1},
        {idChat: 1, mensaje: 'hola', idUsuario: 2}
    ]
    for(let i = 0; i < ctos; i++) {
        let mensajeChat = 
            {
            idChat: lista[i].idChat,
            mensaje: lista[i].mensaje,
            idUsuario: lista[i].idUsuario,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(mensajeChat)
    }
    return Promise.all(factory);
}

module.exports = {
    mensajeChatFactory
}