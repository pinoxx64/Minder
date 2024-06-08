class ListaAmigos{
    idUsuario1 = 0;
    idUsuario2 = 0;

    constructor(id, idU1 = 0, idU2 = 0){
        this.id = id
        this.idUsuario1 = idU1
        this.idUsuario2 = idU2
    }
}

module.export = {ListaAmigos}