import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PerfilComponent } from '../perfil/perfil.component';

import { AuthService } from '../../service/auth.service';
import { EventoComponent } from '../evento/evento.component';
import { VerUsuarioComponent } from '../ver-usuario/ver-usuario.component';
import { VistaEventoComponent } from '../vista-evento/vista-evento.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';


@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    PerfilComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  constructor(
    public servicioAuth: AuthService
  ){}
}
