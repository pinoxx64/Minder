import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ConfirmComponent } from '../confirm/confirm.component';

import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../service/usuario.service';
import { Preferencia } from '../../interface/preferencia';
import { PreferenciaService } from '../../service/preferencia.service';
import { Nino } from '../../interface/nino';
import { NinoService } from '../../service/nino.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    ReactiveFormsModule, 
    CalendarModule,
    FormsModule,
    ConfirmComponent
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  providers:[
    UsuarioService,
    MessageService,
    NinoService
  ]
})
export class RegistroComponent implements OnInit{
  constructor(
    public messageService: MessageService,
    private servicioUsuario: UsuarioService,
    private servicioNino: NinoService
  ){}
  usuarios: Usuario = { 
    id: 0, 
    nombre: '', 
    correo: '', 
    fechaNacimiento: new Date(2001, 0, 1),
    contrasena: '',
    genero: '',
    foto: ''
  }

  @Input() usuario?: any
  @Input() tipo=0
  @Input() visible: boolean = false;

  @Output() cerrarModal = new EventEmitter<void>();

  numArte: number = 50;
  numDeporte: number = 50;
  numPolitico: number = 50;

  ninos: Nino[] | undefined
  ninoSeleccionado: Nino | undefined
  subscriptionNino: Subscription=new Subscription

  formGroup: FormGroup | undefined;

  //--------------------------------------------------------------------------------------

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  ngOnInit() {
      this.formGroup = new FormGroup({
          date: new FormControl<Date | null>(null)
      });
      /*this.ninos = [
        this.subscriptionNino = this.servicioNino.usuariosGet().subscribe({
          next: (data: Array<Usuario>) => {
            this.listaNino=data
          },
          error: (e) => {
    
          }
        })
      ]*/
  }

  crear(b:Boolean){
    if (b){
        this.messageService.add({ severity: 'info', summary:'Crear usuario', detail:'En curso', life:3000});
  
        this.servicioUsuario.usuariosPost(this.usuarios).subscribe({
          next: (data: any) => {
       
            setTimeout(() => {
              this.messageService.add({severity: 'success', summary:'Crear usuario', detail:'Completado', life:3000});
              this.usuarios.id = data.id
              this.usuarios.nombre= ''
              this.usuarios.correo= ''
              this.usuarios.fechaNacimiento= new Date(1900, 0, 1)
              this.usuarios.contrasena= ''
              this.usuarios.genero= ''
              this.usuarios.foto= ''
              window.location.reload() 
            });
          },
          error: (error) => {
            this.messageService.add({severity: 'error', summary:'Crear usuario', detail:'Ha surguido un error al crear el usuario, inténtelo de nuevo', life:3000});
          }
        });
    }
  }
}
