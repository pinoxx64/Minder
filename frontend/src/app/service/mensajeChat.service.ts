import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { MensajeChat } from '../interface/mensajeChat';

@Injectable({
    providedIn: 'root'
  })
export class MensajeChatService{
    baseUrl = environment.baseUrl+environment.urlMensajeChat
    constructor(private http:HttpClient){}

      mensajeChatGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      mensajeChatsPost(mensajeChats:MensajeChat): Observable<any | undefined> {
        let body={mensajeChats:mensajeChats}
        
         return this.http.post<any>(this.baseUrl,mensajeChats).pipe(
         
         )
       }
      mensajeChatsDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      mensajeChatsPut(mensajeChats:MensajeChat, id:number): Observable<any | undefined> {
        let body={mensajeChat: mensajeChats}
        return this.http.put<any>(this.baseUrl+'/'+id,mensajeChats,{params: {auth: true}}).pipe(
    
        )
       }
}