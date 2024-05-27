export interface Usuario{
    id?: number,
    nombre: string,
    correo: string,
    fechaNacimiento: Date,
    contrasena: string,
    genero: string,
    foto: string,
    createdAt?:Date,
    updatedAt?:Date
}