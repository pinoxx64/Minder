import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Usuario } from '../interface/usuario';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService{
    baseUrl = environment.baseUrl+environment.urlUsuario
    constructor(private http:HttpClient){}

    usuarioAleatorioInteresante(): Observable<any  | undefined>{
      return this.http.get<any>(this.baseUrl+'/ale').pipe(
        catchError((error) =>{
          return of(undefined)
        })
      )
    }

    usuariosGet(): Observable<any  | undefined> {
        return this.http.get<any>(this.baseUrl).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuariosPost(usuarios:Usuario): Observable<any | undefined> {
        let body={usuarios:usuarios}
        
         return this.http.post<any>(this.baseUrl,usuarios).pipe(
         
         )
       }
      usuariosDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuariosPut(usuarios:Usuario, id:number): Observable<any | undefined> {
        let body={usuario: usuarios}
        return this.http.put<any>(this.baseUrl+'/'+id,usuarios,{params: {auth: true}}).pipe(
    
        )
       }
}