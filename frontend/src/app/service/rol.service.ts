import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Rol } from '../interface/rol';

@Injectable({
    providedIn: 'root'
  })
export class RolService{
    baseUrl = environment.baseUrl+environment.urlRol
    constructor(private http:HttpClient){}

      rolGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      rolsPost(rols:Rol): Observable<any | undefined> {
        let body={rols:rols}
        
         return this.http.post<any>(this.baseUrl,rols).pipe(
         
         )
       }
      rolsDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      rolsPut(rols:Rol, id:number): Observable<any | undefined> {
        let body={rol: rols}
        return this.http.put<any>(this.baseUrl+'/'+id,rols,{params: {auth: true}}).pipe(
    
        )
       }
}