import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { CabeceraComponent } from '../cabecera/cabecera.component';

import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { PreferenciaService } from '../../service/preferencia.service';
import { Preferencia } from '../../interface/preferencia';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    TableModule, 
    TagModule, 
    RatingModule, 
    ButtonModule, 
    CommonModule,
    DataViewModule,
    CabeceraComponent
  ],
  providers: [MessageService, UsuarioService],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  constructor(
    public messageService: MessageService,
    private servicioUsuario: UsuarioService,
    private servicioPreferencia: PreferenciaService,
    private servicioAuth: AuthService
  ){}

  subscription: Subscription = new Subscription();
  ale!: number;
  usuario!: Usuario;
  preferencias!: Array<Preferencia>;
  preferenciaUsuario!: Preferencia;
  usuariosInteresantes: Array<number> = [];
  usuarioBuscado!: Usuario;
  numId!: number;

  ngOnInit(): void {
    this.numId = this.servicioAuth.getUid();
    
    const usuario$ = this.servicioUsuario.usuarioGet(this.numId);
    const preferencias$ = this.servicioPreferencia.preferenciasGet();
    const preferenciaUsuario$ = this.servicioPreferencia.preferenciaGet(this.numId);

    this.subscription = forkJoin([usuario$, preferencias$, preferenciaUsuario$]).subscribe({
      next: ([usuarioData, preferenciasData, preferenciaUsuarioData]) => {
        this.usuario = usuarioData;
        this.preferencias = preferenciasData;
        this.preferenciaUsuario = preferenciaUsuarioData;
        this.filtrarUsuariosInteresantes();
        this.cargarUsuarioAleatorio();
      },
      error: (e) => {
        console.error(e);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  filtrarUsuariosInteresantes(): void {
    for (let i = 0; i < this.preferencias.length; i++) {
      if (
        this.preferenciaUsuario.arte >= (this.preferencias[i].arte - 10) && this.preferenciaUsuario.arte <= (this.preferencias[i].arte + 10) &&
        this.preferenciaUsuario.deporte >= (this.preferencias[i].deporte - 10) && this.preferenciaUsuario.deporte <= (this.preferencias[i].deporte + 10) &&
        this.preferenciaUsuario.politico >= (this.preferencias[i].politico - 10) && this.preferenciaUsuario.politico <= (this.preferencias[i].politico + 10) &&
        this.preferenciaUsuario.idTipo == this.preferencias[i].idTipo &&
        this.preferenciaUsuario.idInteres == this.preferencias[i].idInteres &&
        this.preferenciaUsuario.idNinos == this.preferencias[i].idNinos
      ) {
        this.usuariosInteresantes.push(this.preferencias[i].idUsuario);
      }
    }
    console.log(this.usuariosInteresantes);
  }

  cargarUsuarioAleatorio(): void {
    if (this.usuariosInteresantes.length > 0) {
      this.ale = Math.floor(Math.random() * this.usuariosInteresantes.length);
      this.subscription = this.servicioUsuario.usuarioGet(this.usuariosInteresantes[this.ale]).subscribe({
        next: (data: Usuario) => {
          this.usuarioBuscado = data;
        },
        error: (e) => {
          console.error(e);
        }
      });
    } else {
      console.error('No hay usuarios interesantes disponibles.');
    }
  }

  like(): void {
    // si acepta lo añade a la lista de amigos, si no se espera y de cualquier manera carga otro usuario
    window.location.reload();
  }

  dislike(): void {
    window.location.reload();
  }
}