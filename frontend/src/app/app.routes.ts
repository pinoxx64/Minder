//Arreglar el Guard
import { Routes } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { EventoComponent } from './components/evento/evento.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaChatsComponent } from './components/lista-chats/lista-chats.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { accesoGuard } from './guards/acceso.guard';
import { VistaEventoComponent } from './components/vista-evento/vista-evento.component';
import { CrearPreferenciaComponent } from './components/crear-preferencia/crear-preferencia.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'presentacion', component:HomeComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'evento', component:EventoComponent},
    {path: 'usuario',component:VerUsuarioComponent/*,
canActivate: [accesoGuard], data: {rol: ['administrador']}*/},
    {path: 'listaChats', component:ListaChatsComponent},
    {path: 'chat', component:ChatComponent},
    {path: 'eventoUsuario', component:VistaEventoComponent},
    {path: 'crearPreferencia', component:CrearPreferenciaComponent}

];
