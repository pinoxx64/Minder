import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { UsuarioRol } from '../interface/usuarioRol';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioRolService{
    baseUrl = environment.baseUrl+environment.urlUsuarioRol
    constructor(private http:HttpClient){}

    usuarioRolsGet(): Observable<any  | undefined> {
        return this.http.get<any>(this.baseUrl).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioRolGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioRolsPost(usuarioRols:UsuarioRol): Observable<any | undefined> {
        let body={usuarioRols:usuarioRols}
        
         return this.http.post<any>(this.baseUrl,usuarioRols).pipe(
         
         )
       }
      usuarioRolsDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioRolsPut(usuarioRols:UsuarioRol, id:number): Observable<any | undefined> {
        let body={usuarioRol: usuarioRols}
        return this.http.put<any>(this.baseUrl+'/'+id,usuarioRols,{params: {auth: true}}).pipe(
    
        )
       }
}