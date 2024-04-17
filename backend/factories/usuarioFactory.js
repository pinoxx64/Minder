//Cambiar el formato de fecha
const bcrypt = require('bcrypt');
const usuarioFactory = async (ctos=20) => {
    
 
    let factory = []
    let lista=[
        {nombre:'Arthas', correo: 'example@example.com', fechaNacimiento: '10/04/1980', genero: 'Masculino', foto: 'Arthas.png'},
        {nombre:'Chilchack', correo: 'example2@example.com', fechaNacimiento: '29/08/2004', genero: 'Masculino', foto: 'chilchack.webp'},
        {nombre:'Druid', correo: 'example3@example.com', fechaNacimiento: '14/06/2001', genero: 'Femenino', foto: 'druid.jpeg'},
        {nombre:'Falin', correo: 'example4@example.com', fechaNacimiento: '08/05/2001', genero: 'Masculino', foto: 'Falin.webp'},
        {nombre:'Frodo', correo: 'example5@example.com', fechaNacimiento: '19/10/1974', genero: 'Masculino', foto: 'frodo.webp'},
        {nombre:'Gandalf', correo: 'example6@example.com', fechaNacimiento: '07/12/0024', genero: 'Masculino', foto: 'gandlaf.jpg'},
        {nombre:'Gimli', correo: 'example7@example.com', fechaNacimiento: '30/11/1885', genero: 'Masculino', foto: 'Gimli.webp'},
        {nombre:'Gollum', correo: 'example8@example.com', fechaNacimiento: '08/01/1435', genero: 'Masculino', foto: 'golum.jpeg'},
        {nombre:'Keyleth', correo: 'example9@example.com', fechaNacimiento: '15/09/2001', genero: 'Femenino', foto: 'Keyleth.webp'},
        {nombre:'Laios', correo: 'example10@example.com', fechaNacimiento: '03/11/1998', genero: 'Masculino', foto: 'Laios.webp'},
        {nombre:'Legolas', correo: 'example11@example.com', fechaNacimiento: '01/01/0030', genero: 'Masculino', foto: 'Legolas.webp'},
        {nombre:'Marcille', correo: 'example12@example.com', fechaNacimiento: '01/01/1974', genero: 'Femenino', foto: 'marcille.jpg'},
        {nombre:'Mediano', correo: 'example13@example.com', fechaNacimiento: '31/12/2007', genero: 'Masculino', foto: 'mediano.jpeg'},
        {nombre:'Palaca', correo: 'example14@example.com', fechaNacimiento: '06/08/2003', genero: 'Femenino', foto: 'Paladin.webp'},
        {nombre:'Pike', correo: 'example15@example.com', fechaNacimiento: '21/01/2002', genero: 'Femenino', foto: 'Pike.webp'},
        {nombre:'Sam', correo: 'example16@example.com', fechaNacimiento: '25/02/1972', genero: 'Masculino', foto: 'Sam.webp'},
        {nombre:'Scar', correo: 'example17@example.com', fechaNacimiento: '03/10/2001', genero: 'Masculino', foto: 'Scar.jpg'},
        {nombre:'Shensi', correo: 'example18@example.com', fechaNacimiento: '27/09/1988', genero: 'Masculino', foto: 'shensi.jpg'},
        {nombre:'Skilan', correo: 'example19@example.com', fechaNacimiento: '13/10/2004', genero: 'Masculino', foto: 'skilan.webp'},
        {nombre:'Tiefling', correo: 'example20@example.com', fechaNacimiento: '19/01/2002', genero: 'Femenino', foto: 'Tiefling.webp'},

    ]
    const contrasena = await bcrypt.hash('qwerty1234', 10);
    for(let i = 0; i < ctos; i++) {
        let usuario = 
            {
            nombre: lista[i].nombre,
            correo: lista[i].correo,
            fechaNacimiento: lista[i].fechaNacimiento,
            genero: lista[i].genero,
            foto: lista[i].foto,
            contrasena: contrasena,
   
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(usuario)
    }
    return Promise.all(factory);
}

module.exports = {
    usuarioFactory
}