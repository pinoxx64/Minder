//Cambiar el formato de fecha
const bcrypt = require('bcrypt');
const usuarioFactory = async (ctos=20) => {
    
 
    let factory = []
    let lista=[
        {nombre:'Arthas', correo: 'example@example.com', fechaNacimiento: '1980/04/10', genero: 'Masculino', foto: 'Arthas.png'},
        {nombre:'Chilchack', correo: 'example2@example.com', fechaNacimiento: '2004/08/29', genero: 'Masculino', foto: 'chilchack.webp'},
        {nombre:'Druid', correo: 'example3@example.com', fechaNacimiento: '2001/06/14', genero: 'Femenino', foto: 'druid.jpeg'},
        {nombre:'Falin', correo: 'example4@example.com', fechaNacimiento: '2001/05/08', genero: 'Masculino', foto: 'Falin.webp'},
        {nombre:'Frodo', correo: 'example5@example.com', fechaNacimiento: '1974/10/19', genero: 'Masculino', foto: 'frodo.webp'},
        {nombre:'Gandalf', correo: 'example6@example.com', fechaNacimiento: '0024/12/07', genero: 'Masculino', foto: 'gandlaf.jpg'},
        {nombre:'Gimli', correo: 'example7@example.com', fechaNacimiento: '1885/11/30', genero: 'Masculino', foto: 'Gimli.webp'},
        {nombre:'Gollum', correo: 'example8@example.com', fechaNacimiento: '1435/01/08', genero: 'Masculino', foto: 'golum.jpeg'},
        {nombre:'Keyleth', correo: 'example9@example.com', fechaNacimiento: '2001/09/15', genero: 'Femenino', foto: 'Keyleth.webp'},
        {nombre:'Laios', correo: 'example10@example.com', fechaNacimiento: '1998/11/03', genero: 'Masculino', foto: 'Laios.webp'},
        {nombre:'Legolas', correo: 'example11@example.com', fechaNacimiento: '0030/01/01', genero: 'Masculino', foto: 'Legolas.webp'},
        {nombre:'Marcille', correo: 'example12@example.com', fechaNacimiento: '1974/01/01', genero: 'Femenino', foto: 'marcille.jpg'},
        {nombre:'Mediano', correo: 'example13@example.com', fechaNacimiento: '2007/12/31', genero: 'Masculino', foto: 'mediano.jpeg'},
        {nombre:'Palaca', correo: 'example14@example.com', fechaNacimiento: '2003/08/06', genero: 'Femenino', foto: 'Paladin.webp'},
        {nombre:'Pike', correo: 'example15@example.com', fechaNacimiento: '2002/01/21', genero: 'Femenino', foto: 'Pike.webp'},
        {nombre:'Sam', correo: 'example16@example.com', fechaNacimiento: '1972/02/25', genero: 'Masculino', foto: 'Sam.webp'},
        {nombre:'Scar', correo: 'example17@example.com', fechaNacimiento: '2001/10/03', genero: 'Masculino', foto: 'Scar.jpg'},
        {nombre:'Shensi', correo: 'example18@example.com', fechaNacimiento: '1988/09/27', genero: 'Masculino', foto: 'shensi.jpg'},
        {nombre:'Skilan', correo: 'example19@example.com', fechaNacimiento: '2004/10/13', genero: 'Masculino', foto: 'skilan.webp'},
        {nombre:'Tiefling', correo: 'example20@example.com', fechaNacimiento: '2002/01/19', genero: 'Femenino', foto: 'Tiefling.webp'},

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