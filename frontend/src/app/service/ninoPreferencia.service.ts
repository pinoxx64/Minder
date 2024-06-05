import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { NinoPreferencia } from '../interface/ninoPreferencia';

@Injectable({
    providedIn: 'root'
  })
export class NinoPreferenciaService{
    baseUrl = environment.baseUrl+environment.urlNinoPreferencia
    constructor(private http:HttpClient){}

      ninoPreferenciaGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      ninoPreferenciasPost(ninoPreferencias:NinoPreferencia): Observable<any | undefined> {
        let body={ninoPreferencias:ninoPreferencias}
        
         return this.http.post<any>(this.baseUrl,ninoPreferencias).pipe(
         
         )
       }
      ninoPreferenciasDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      ninoPreferenciasPut(ninoPreferencias:NinoPreferencia, id:number): Observable<any | undefined> {
        let body={ninoPreferencia: ninoPreferencias}
        return this.http.put<any>(this.baseUrl+'/'+id,ninoPreferencias,{params: {auth: true}}).pipe(
    
        )
       }
}