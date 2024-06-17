import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Preferencia } from '../../interface/preferencia';
import { PreferenciaService } from '../../service/preferencia.service';
import { AuthService } from '../../service/auth.service';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-crear-preferencia',
  standalone: true,
  imports: [    
    ToastModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    ReactiveFormsModule, 
    CalendarModule,
    FormsModule,
    ConfirmComponent,
    InicioComponent
  ],
  templateUrl: './crear-preferencia.component.html',
  styleUrl: './crear-preferencia.component.css',
  providers:[
    PreferenciaService,
    MessageService,
    AuthService
  ]
})
export class CrearPreferenciaComponent {
constructor(
  public messageService: MessageService,
  private servicioPreferencia: PreferenciaService,
  private servicioAuth: AuthService
){}
  preferencias: Preferencia = {
    id: 0,
    idUsuario: this.servicioAuth.getUid(),
    arte: 0,
    deporte: 0,
    politico: 0,
    idTipo: 0,
    idInteres: 0,
    idNinos: 0
  }

  crear(b:Boolean){
    if (b){
        this.messageService.add({ severity: 'info', summary:'Crear usuario', detail:'En curso', life:3000});
  
        this.servicioPreferencia.preferenciasPost(this.preferencias).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.preferencias.id = data.id
              this.preferencias.idUsuario = this.servicioAuth.getUid()
              this.preferencias.arte = 0
              this.preferencias.deporte = 0
              this.preferencias.politico = 0
              this.preferencias.idTipo = 0
              this.preferencias.idInteres = 0
              this.preferencias.idNinos = 0
              window.location.href="../inicio"
            })
          },
          error: (error) => {
            this.messageService.add({severity: 'error', summary:'Crear usuario', detail:'Ha surguido un error al crear el usuario, inténtelo de nuevo', life:3000});
          }
        })
    }
  }

  /*    */
}
