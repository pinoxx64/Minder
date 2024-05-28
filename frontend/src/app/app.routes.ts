import { Routes } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { EventoComponent } from './components/evento/evento.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaChatsComponent } from './components/lista-chats/lista-chats.component';
import { AppComponent } from './app.component';
import { accesoGuard } from './guards/acceso.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/presentacion', pathMatch: 'full'},
    {path: 'presentacion', component:AppComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'evento', component:EventoComponent},
    {path: 'usuario',component:VerUsuarioComponent,
    canActivate: [accesoGuard], data: {rol: ['Administrador']}},
    {path: 'listaChats', component:ListaChatsComponent},
    {path: 'chat', component:ChatComponent}

];
