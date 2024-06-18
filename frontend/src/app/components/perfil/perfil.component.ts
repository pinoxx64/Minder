import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../service/usuario.service';
import { CalendarModule } from 'primeng/calendar';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    ConfirmComponent,
    CommonModule,
    CalendarModule
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  providers: [
    DialogService, 
    MessageService, 
    UsuarioService, 
    NoopAnimationsModule,
    AuthService
  ]
})
export class PerfilComponent {
  constructor(
    public messageService: MessageService,
    private servicioUsuario: UsuarioService,
    private servicioAuth: AuthService
  ) { }
  value = ''
  us!:Usuario
  usuarios: Usuario = { 
    id: 0, 
    nombre: '', 
    correo: '', 
    fechaNacimiento: new Date(2001, 1, 1),
    contrasena: '',
    genero: '',
    foto: ''
  }
  @Input() usuario?: any
  @Input() id!: number
  subscripcionUsuarios: Subscription = new Subscription;

  @Input() visible: boolean = false

  @Output() cerrarModal = new EventEmitter<void>();

  @Input() tipo=0

  ngOnInit(): void {

  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  async guardar(b:Boolean){
    if(b){
         this.servicioUsuario.usuariosPut(this.usuarios,this.servicioAuth.getUid()).subscribe({
          next: (data:any)=> {
            setTimeout(()=>{
              this.messageService.add({severity:'success', summary:'Actualizar usuario', detail:'Completada', life:3000})
          
              for(let i=0;i<this.usuario.length;i++){
                if(this.usuario[i].id == this.usuarios.id){
              
                  this.usuario[i]=this.usuarios
                  this.visible=false
                }
                this.visible=false
              }
              window.location.reload()
            }, 1000)
          },
        })
    }
  }

  showDialog(){
    this.servicioUsuario.usuarioGet(this.servicioAuth.getUid()).subscribe({
      
      next: (usu:Usuario) => {
        this.us = usu
        this.visible=true
        this.usuarios.nombre = usu.nombre
        this.usuarios.correo = usu.correo
        this.usuarios.fechaNacimiento = usu.fechaNacimiento
        this.usuarios.contrasena = usu.contrasena
        this.usuarios.genero = usu.genero
        this.usuarios.foto = usu.foto
      },
      error: (e) => {
      
      }
    })
  }
}
