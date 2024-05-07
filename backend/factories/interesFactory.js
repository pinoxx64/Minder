const interesFactory = async (ctos=3) => {
    
    let factory = []
    let lista=[
        {nombre: 'hombre'},
        {nombre: 'mujer'},
        {nombre: 'ambas'}
    ]
    for(let i = 0; i < ctos; i++) {
        let interes = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(interes)
    }
    return Promise.all(factory);
}

module.exports = {
    interesFactory
}