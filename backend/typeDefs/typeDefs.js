const { gql } = require('graphql-tag');

const typeDefs = gql`
  type listaAmigos {
    id: Int
    idUsuario1: Int
    idUsuario2: Int
  }

  type Query {
    getListaAmigos(id: Int): listaAmigos!
  }

  type Mutation {
    getListaAmigos(id: Int): listaAmigos!
    postListaAmigos(idUsuario1: Int, idUsuario2: Int): listaAmigos!
    deleteListaAmigos(id:Int): listaAmigos!
  }
`;

module.exports = typeDefs;