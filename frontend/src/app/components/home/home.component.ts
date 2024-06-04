import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EventoComponent } from '../evento/evento.component';
import { VerUsuarioComponent } from '../ver-usuario/ver-usuario.component';
import { RegistroComponent } from '../registro/registro.component';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    EventoComponent,
    VerUsuarioComponent,
    RegistroComponent,
    //LoginComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
