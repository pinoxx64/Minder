const { response, request } = require('express');

const esAdmin = (req, res, next) => {
    if (!req.uid) {
        return res.status(500).json({ 'msg': 'No es posible el acceso como administrador.' })
    }

    if (req.abilities.includes('Administrador')) {
        next()
    } else {
        return res.status(401).json('Acceso no autorizado')
    }
}

module.exports = {
    esAdmin
}