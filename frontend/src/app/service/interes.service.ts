import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Interes } from '../interface/interes';

@Injectable({
    providedIn: 'root'
  })
export class InteresService{
    baseUrl = environment.baseUrl+environment.urlInteres
    constructor(private http:HttpClient){}

      interesGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      interesPost(interes:Interes): Observable<any | undefined> {
        let body={interes:interes}
        
         return this.http.post<any>(this.baseUrl,interes).pipe(
         
         )
       }
      interesDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      interesPut(interes:Interes, id:number): Observable<any | undefined> {
        let body={intere: interes}
        return this.http.put<any>(this.baseUrl+'/'+id,interes,{params: {auth: true}}).pipe(
    
        )
       }
}