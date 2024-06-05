import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { TipoRelacion } from '../interface/tipoRelacion';

@Injectable({
    providedIn: 'root'
  })
export class TipoRelacionService{
    baseUrl = environment.baseUrl+environment.urlTipoRelacion
    constructor(private http:HttpClient){}

      tipoRelacionGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      tipoRelacionsPost(tipoRelacions:TipoRelacion): Observable<any | undefined> {
        let body={tipoRelacions:tipoRelacions}
        
         return this.http.post<any>(this.baseUrl,tipoRelacions).pipe(
         
         )
       }
      tipoRelacionsDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      tipoRelacionsPut(tipoRelacions:TipoRelacion, id:number): Observable<any | undefined> {
        let body={tipoRelacion: tipoRelacions}
        return this.http.put<any>(this.baseUrl+'/'+id,tipoRelacions,{params: {auth: true}}).pipe(
    
        )
       }
}