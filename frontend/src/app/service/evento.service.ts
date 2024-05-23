import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Evento } from '../interface/evento';

@Injectable({
    providedIn: 'root'
  })
export class EventoService{
    baseUrl = environment.baseUrl+environment.urlEvento
    constructor(private http:HttpClient){}

    eventosGet(): Observable<any  | undefined> {
      return this.http.get<any>(this.baseUrl).pipe(
        catchError((error) =>{
          return of(undefined)
        })
      )
    }

      eventoGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      eventosPost(eventos:Evento): Observable<any | undefined> {
        let body={eventos:eventos}
        
         return this.http.post<any>(this.baseUrl,eventos).pipe(
         
         )
       }
      eventosDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      eventosPut(eventos:Evento, id:number): Observable<any | undefined> {
        let body={evento: eventos}
        return this.http.put<any>(this.baseUrl+'/'+id,eventos,{params: {auth: true}}).pipe(
    
        )
       }
}