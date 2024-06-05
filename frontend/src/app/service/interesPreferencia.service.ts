import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { InteresPreferencia } from '../interface/interesPreferencia';

@Injectable({
    providedIn: 'root'
  })
export class InteresPreferenciaService{
    baseUrl = environment.baseUrl+environment.urlInteresPreferencia
    constructor(private http:HttpClient){}

      interesPreferenciaGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      interesPreferenciaPost(interesPreferencia:InteresPreferencia): Observable<any | undefined> {
        let body={interesPreferencia:interesPreferencia}
        
         return this.http.post<any>(this.baseUrl,interesPreferencia).pipe(
         
         )
       }
      interesPreferenciaDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      interesPreferenciaPut(interesPreferencia:InteresPreferencia, id:number): Observable<any | undefined> {
        let body={intere: interesPreferencia}
        return this.http.put<any>(this.baseUrl+'/'+id,interesPreferencia,{params: {auth: true}}).pipe(
    
        )
       }
}