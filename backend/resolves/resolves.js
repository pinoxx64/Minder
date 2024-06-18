const { listaAmigos } = require('../models/index.js');

const resolvers = {
    Query: {
      getListaAmigos: (parent, { id }) => {
        return listaAmigos.find(amigo => amigo.id === id);
      }
    },
    Mutation: {
      postListaAmigos: (parent, { idUsuario1, idUsuario2 }) => {
        const nuevoAmigo = {
          id: listaAmigos.length + 1,
          idUsuario1,
          idUsuario2
        };
        listaAmigos.push(nuevoAmigo);
        return nuevoAmigo;
      },
      deleteListaAmigos: (parent, { id }) => {
        const index = listaAmigos.findIndex(amigo => amigo.id === id);
        if (index === -1) return null;
        const eliminado = listaAmigos.splice(index, 1);
        return eliminado[0];
      }
    }
  };
  
  module.exports = resolvers;

module.exports = listaAmigos;