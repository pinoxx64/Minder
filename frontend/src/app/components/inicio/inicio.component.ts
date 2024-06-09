import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { Subscription } from 'rxjs';

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
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    public messageService: MessageService,
    private servicioUsuario: UsuarioService,
    private servicioPreferencia: PreferenciaService,
    private servicioAuth: AuthService
  ){}

  subscriptionUsers: Subscription=new Subscription;
  subscriptionPreferencia: Subscription=new Subscription;
  usuario!: Usuario
  preferencias!: Array<Preferencia>
  preferenciaUsuario!: Preferencia
  usuariosInteresantes!: Array<Number>

  ngOnInit(): void{
    // con la id del usuario buscar un usuario con las preferencias similares
    this.subscriptionUsers = this.servicioUsuario.usuarioGet(this.servicioAuth.getUid()).subscribe({
      next: (data:Usuario) => {
        this.usuario=data
      },
      error: (e) => {

      }
    })

    this.subscriptionPreferencia = this.servicioPreferencia.preferenciasGet().subscribe({
      next: (data:Array<Preferencia>) => {
        this.preferencias=data
      },
      error: (e) => {

      }
    })

    this.subscriptionPreferencia = this.servicioPreferencia.preferenciaGet(this.servicioAuth.getUid()).subscribe({
      next: (data:Preferencia) => {
        this.preferenciaUsuario=data
      },
      error: (e) => {

      }
    })

    for (let i = 0; i < this.preferencias.length; i++) {
      if (this.preferenciaUsuario.arte>=(this.preferencias[i].arte-10)||this.preferencias[i].arte<(this.preferencias[i].arte+10)) {
        if (this.preferenciaUsuario.deporte>=(this.preferencias[i].deporte-10)||this.preferenciaUsuario.deporte<(this.preferencias[i].deporte+10)) {
          if (this.preferenciaUsuario.politico>=(this.preferencias[i].politico-10)||this.preferenciaUsuario.politico<(this.preferencias[i].politico+10)) {
            if (this.preferenciaUsuario.idTipo==this.preferencias[i].idTipo) {
              if (this.preferenciaUsuario.idInteres==this.preferencias[i].idInteres) {
                if (this.preferenciaUsuario.idNinos==this.preferencias[i].idNinos) {
                  this.usuariosInteresantes.push(this.preferencias[i].idUsuario)
                }
              }
            }
          }
        }
      }
    }

    
  }
  like():void{
    // si acepta lo añade a la lista de amigos, si no se espera y de cualquier manera carga otro usuario
  }
  dislike():void{
    // carga otro usuario
  }
}
