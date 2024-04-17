const usuarioRolFactory = async (ctos=20) => {
    
    let factory = []
    let lista=[
        {idUsuario: 1, idRol: 1},
        {idUsuario: 2, idRol: 2},
        {idUsuario: 3, idRol: 2},
        {idUsuario: 4, idRol: 2},
        {idUsuario: 5, idRol: 2},
        {idUsuario: 6, idRol: 2},
        {idUsuario: 7, idRol: 2},
        {idUsuario: 8, idRol: 2},
        {idUsuario: 9, idRol: 2},
        {idUsuario: 10, idRol: 2},
        {idUsuario: 11, idRol: 2},
        {idUsuario: 12, idRol: 2},
        {idUsuario: 13, idRol: 2},
        {idUsuario: 14, idRol: 2},
        {idUsuario: 15, idRol: 2},
        {idUsuario: 16, idRol: 2},
        {idUsuario: 17, idRol: 2},
        {idUsuario: 18, idRol: 2},
        {idUsuario: 19, idRol: 2},
        {idUsuario: 20, idRol: 2}

    ]
    for(let i = 0; i < ctos; i++) {
        let usuarioRol = 
            {
            idUsuario: lista[i].idUsuario,
            idRol: lista[i].idRol,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(usuarioRol)
    }
    return Promise.all(factory);
}

module.exports = {
    usuarioRolFactory
}