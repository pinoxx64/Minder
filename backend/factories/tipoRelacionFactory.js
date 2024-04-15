const tipoRelacionFactory = async (ctos=4) => {
    
    let factory = []
    let lista=[
        {nombre: 'Seria'},
        {nombre: 'Pasajera'},

    ]
    for(let i = 0; i < ctos; i++) {
        let tipoRelacion = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(tipoRelacion)
    }
    return Promise.all(factory);
}

module.exports = {
    tipoRelacionFactory
}