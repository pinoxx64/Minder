import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Preferencia } from '../interface/preferencia';

@Injectable({
    providedIn: 'root'
  })
export class PreferenciaService{
    baseUrl = environment.baseUrl+environment.urlPreferencia
    constructor(private http:HttpClient){}

    preferenciasGet(): Observable<any  | undefined> {
      return this.http.get<any>(this.baseUrl).pipe(
        catchError((error) =>{
          return of(undefined)
        })
      )
    }

      preferenciaGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      preferenciasPost(preferencias:Preferencia): Observable<any | undefined> {
        let body={preferencias:preferencias}
        
         return this.http.post<any>(this.baseUrl,preferencias).pipe(
         
         )
       }
      preferenciasDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      preferenciasPut(preferencias:Preferencia, id:number): Observable<any | undefined> {
        let body={preferencia: preferencias}
        return this.http.put<any>(this.baseUrl+'/'+id,preferencias,{params: {auth: true}}).pipe(
    
        )
       }
}