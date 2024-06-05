import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { TipoPreferencia } from '../interface/tipoPreferencia';

@Injectable({
    providedIn: 'root'
  })
export class TipoPreferenciaService{
    baseUrl = environment.baseUrl+environment.urlTipoPrefetencia
    constructor(private http:HttpClient){}

      tipoPreferenciaGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      tipoPreferenciasPost(tipoPreferencias:TipoPreferencia): Observable<any | undefined> {
        let body={tipoPreferencias:tipoPreferencias}
        
         return this.http.post<any>(this.baseUrl,tipoPreferencias).pipe(
         
         )
       }
      tipoPreferenciasDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      tipoPreferenciasPut(tipoPreferencias:TipoPreferencia, id:number): Observable<any | undefined> {
        let body={tipoPreferencia: tipoPreferencias}
        return this.http.put<any>(this.baseUrl+'/'+id,tipoPreferencias,{params: {auth: true}}).pipe(
    
        )
       }
}