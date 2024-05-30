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

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-editar-evento',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    ConfirmComponent,
    CalendarModule
  ],
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css',
  providers: [DialogService, MessageService, EventoService]
})
export class EditarEventoComponent {
  constructor(
    public messageService: MessageService,
    private servicioEvento: EventoService
  ) { }
  value = ''
  us!:Evento
  eventos: Evento = { 
    id: 0, 
    nombre: '', 
    fecha: new Date(1900, 0, 1),
    descrip: '', 
    latitud: 0.0,
    longitud: 0.0
  }
  @Input() evento?: any
  @Input() id!: number
  subscripcioneventos: Subscription = new Subscription;

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
         this.servicioEvento.eventosPut(this.eventos,this.id).subscribe({
          next: (data:any)=> {
            setTimeout(()=>{
              this.messageService.add({severity:'success', summary:'Actualizar evento', detail:'Completada', life:3000})
          
              for(let i=0;i<this.evento.length;i++){
                if(this.evento[i].id == this.eventos.id){
              
                  this.evento[i]=this.eventos
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
    this.servicioEvento.eventoGet(this.id!).subscribe({
      
      next: (usu:Evento) => {
        this.us = usu
        this.visible=true
        this.eventos.nombre = usu.nombre
        this.eventos.fecha = usu.fecha
        this.eventos.descrip = usu.descrip
        this.eventos.latitud = usu.latitud
        this.eventos.longitud = usu.longitud
      },
      error: (e) => {
      
      }
    })
  }

  async eliminar(b:Boolean){
    this.servicioEvento.eventosDelete(this.id).subscribe({
     next:(data: any) => {
       setTimeout(()=>{
         this.messageService.add({severity:'success', summary:'Eliminar evento', detail:'Completada', life:3000})
         for(let i=0;i<this.evento.length;i++){
           if(this.evento[i].id == this.eventos.id){
           this.evento[i]=this.us
           this.visible=false
           window.location.reload()
         }
         this.visible=false
       }
       window.location.reload()
     }, 1000)
   },
   error: (err) => {
  
     this.messageService.add({ severity:'error', summary: 'Eliminar evento', detail: 'Error al eliminar el evento, inténtelo de nuevo', life: 3000 });
   }
   })
 }
}
