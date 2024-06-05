import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { DataViewModule } from 'primeng/dataview';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { Subscription } from 'rxjs';

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
    private servicioUsuario: UsuarioService
  ){}

  subscriptionUsers: Subscription=new Subscription;
  usuario:Array<Usuario>=[]

  ngOnInit(): void{
    this.subscriptionUsers = this.servicioUsuario.usuarioAleatorioInteresante().subscribe({
      next: (data: Array<Usuario>) => {
        this.usuario=data
      },
      error: (e) => {

      }
    })
  }
}
