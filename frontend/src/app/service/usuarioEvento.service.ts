import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { UsuarioEvento } from '../interface/usuarioEvento';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioEventoService{
    baseUrl = environment.baseUrl+environment.urlUsuarioEvento
    constructor(private http:HttpClient){}

    usuarioEventosGet(): Observable<any  | undefined> {
        return this.http.get<any>(this.baseUrl).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioEventoGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioEventosPost(usuarioEventos:UsuarioEvento): Observable<any | undefined> {
        let body={usuarioEventos:usuarioEventos}
        
         return this.http.post<any>(this.baseUrl,usuarioEventos).pipe(
         
         )
       }
      usuarioEventosDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      usuarioEventosPut(usuarioEventos:UsuarioEvento, id:number): Observable<any | undefined> {
        let body={usuarioEvento: usuarioEventos}
        return this.http.put<any>(this.baseUrl+'/'+id,usuarioEventos,{params: {auth: true}}).pipe(
    
        )
       }
}