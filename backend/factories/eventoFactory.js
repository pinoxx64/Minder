const eventoFactory = async (ctos=2) => {
    
    let factory = []
    let lista=[
        {nombre: 'Aventura en mazmorra', fecha: '01/01/2025', descrip: 'El otro dia encontré una mazmorra sin explorar, estoy buscando a un equipo de aventureros dispuestos a acompañarme', latitud: 51.874991, longitud: 11.954253},
        {nombre: 'Guerra santa', fecha: '15/06/2024', descrip: 'Guerra santa en contra de los demonios', latitud: 41.874991, longitud: 21.954253}
    ]
    for(let i = 0; i < ctos; i++) {
        let evento = 
            {
            nombre: lista[i].nombre,
            fecha: lista[i].fecha,
            descrip: lista[i].descrip,
            latitud: lista[i].latitud,
            longitud: lista[i].longitud,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(evento)
    }
    return Promise.all(factory);
}

module.exports = {
    eventoFactory
}