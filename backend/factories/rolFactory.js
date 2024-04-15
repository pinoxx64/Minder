const rolFactory = async (ctos=2) => {
    
    let factory = []
    let lista=[
        {nombre:'Administrador'},
        {nombre:'Usuario'}
    ]
    for(let i = 0; i < ctos; i++) {
        let roles = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(roles)
    }
    return Promise.all(factory);
}

module.exports = {
    rolFactory
}