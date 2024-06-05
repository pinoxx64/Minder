import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Chat } from '../interface/chat';

@Injectable({
    providedIn: 'root'
  })
export class ChatService{
    baseUrl = environment.baseUrl+environment.urlChat
    constructor(private http:HttpClient){}

      chatGet(id:number): Observable<any | undefined> {
    
        return this.http.get<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      chatsPost(chats:Chat): Observable<any | undefined> {
        let body={chats:chats}
        
         return this.http.post<any>(this.baseUrl,chats).pipe(
         
         )
       }
      chatsDelete(id:number): Observable<any | undefined> {
    
        return this.http.delete<any>(this.baseUrl+'/'+id).pipe(
          catchError((error) =>{
            return of(undefined)
          })
        )
      }
      chatsPut(chats:Chat, id:number): Observable<any | undefined> {
        let body={chat: chats}
        return this.http.put<any>(this.baseUrl+'/'+id,chats,{params: {auth: true}}).pipe(
    
        )
       }
}