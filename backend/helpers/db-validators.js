const {response,request} = require('express');
const Conexion = require('../database/conexionUsuario');

const emailExist = (correo = '') => {
    return new Promise((resolve, reject) => {
      const conx = new Conexion();
      conx.checkLogin(correo)
        .then(msg => {
          reject(new Error('Correo registrado'));
        })
        .catch(err => {
          resolve(true);
        });
    });
   };


 
module.exports = {
    emailExist,

}

