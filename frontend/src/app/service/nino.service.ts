import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Nino } from '../interface/nino';

@Injectable({
    providedIn: 'root'
  })
export class NinoService{
    baseUrl = environment.baseUrl+environment.urlNino
    constructor(private http:HttpClient){}

      ninoGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      ninosPost(ninos:Nino): Observable<any | undefined> {
        let body={ninos:ninos}
        
         return this.http.post<any>(this.baseUrl,ninos).pipe(
         
         )
       }
      ninosDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      ninosPut(ninos:Nino, id:number): Observable<any | undefined> {
        let body={nino: ninos}
        return this.http.put<any>(this.baseUrl+'/'+id,ninos,{params: {auth: true}}).pipe(
    
        )
       }
}