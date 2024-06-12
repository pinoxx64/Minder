const { response, request } = require('express');
const { StatusCodes } = require('http-status-codes')
const conx = require('../database/conexionListaAmigos')

class listaAmigoController {

    static obtenerListaAmigos = async (req, res) => {
        try {
            const ListaAmigos = await conx.obtenerListaAmigos()

            if (ListaAmigos.length > 0) {
                res.status(StatusCodes.OK).json({ "msg": ListaAmigos })
            } else {
                res.status(StatusCodes.NOT_FOUND).json({ 'msg': 'No hay registros' })
            }
        } catch (error) {
            console.error('Error obteniendo ListaAmigos:', error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 'msg': 'Error en el servidor.' })
        }
    }

    static obtenerListaAmigoPorId = async (req, res) => {
        try {
            const id = req.params.id
            const ListaAmigo = await conx.obtenerListaAmigoPorId(id)
            res.status(StatusCodes.OK).json(ListaAmigo)
        } catch (error) {
            console.log("Ocurrio un error al buscar el ListaAmigo por id")
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 'msg': 'Error en el servidor.' })

        }
    }

    static modificarListaAmigo = async (req, res) => {
        try {
            const id = req.params.id
            const body = req.body
            const ListaAmigo = await conx.modificarListaAmigo(id,body)

            if (ListaAmigo == 0) {
                return res.status(StatusCodes.NOT_FOUND).json({ 'msg': 'ListaAmigo no encontrado' });
            } else {
                return res.status(StatusCodes.OK).json({ 'msg': 'ListaAmigo modificado exitosamente' });
            }
        } catch (error) {
            console.error('Error al modificar el ListaAmigo:', error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 'msg': 'Error en el servidor.' });
        }
    }


}

module.exports = listaAmigoController
