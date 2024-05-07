const ninoFactory = async (ctos=4) => {
    
    let factory = []
    let lista=[
        {nombre: 'tiene hijos y quiere'},
        {nombre: 'tiene hijos y no quiere'},
        {nombre: 'no tiene hijos y quiere'},
        {nombre: 'no tiene hijos y no quiere'}
    ]
    for(let i = 0; i < ctos; i++) {
        let nino = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(nino)
    }
    return Promise.all(factory);
}

module.exports = {
    ninoFactory
}