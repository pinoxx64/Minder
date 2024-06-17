/*import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
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
import { GoogleMapsModule } from '@angular/google-maps';

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
    CalendarModule,
    GoogleMapsModule
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
  @Input() eventId!: string;
  zoom: number = 12;
  value = ''
  ev!:Evento
  eventos: Evento = { 
    id: 0, 
    nombre: '', 
    fecha: new Date(1900, 0, 1),
    descrip: '', 
    latitud: 0.0,
    longitud: 0.0
  }
  latitude: number = this.eventos.latitud;
  longitude: number = this.eventos.longitud;
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

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();
    }
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
      
      next: (eve:Evento) => {
        this.ev = eve
        this.visible=true
        this.eventos.nombre = eve.nombre
        this.eventos.fecha = eve.fecha
        this.eventos.descrip = eve.descrip
        this.eventos.latitud = eve.latitud
        this.eventos.longitud = eve.longitud
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
           this.evento[i]=this.ev
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
}*/
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Subscription } from 'rxjs';

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
import { CalendarModule } from 'primeng/calendar';
import { GoogleMapsModule } from '@angular/google-maps';

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
    CalendarModule,
    GoogleMapsModule
  ],
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css'],
  providers: [DialogService, MessageService, EventoService]
})
export class EditarEventoComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private servicioEvento: EventoService
  ) { }

  @Input() eventId!: string;
  zoom: number = 12;
  ev!: Evento;
  eventos: Evento = { 
    id: 0, 
    nombre: '', 
    fecha: new Date(1900, 0, 1),
    descrip: '', 
    latitud: 0.0,
    longitud: 0.0
  };

  latitude: number = this.eventos.latitud;
  longitude: number = this.eventos.longitud;

  @Input() evento?: any;
  @Input() id!: number;
  subscripcioneventos: Subscription = new Subscription;
  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  @Input() tipo = 0;

  eventForm!: FormGroup;

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      nombre: new FormControl(this.eventos.nombre),
      fecha: new FormControl(this.eventos.fecha),
      descrip: new FormControl(this.eventos.descrip),
      latitude: new FormControl(this.latitude),
      longitude: new FormControl(this.longitude)
    });
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();
      this.eventForm.patchValue({
        latitude: this.latitude,
        longitude: this.longitude
      });
    }
  }

  async guardar(b: Boolean) {
    if (b) {
      this.eventos.latitud = this.latitude;
      this.eventos.longitud = this.longitude;

      this.servicioEvento.eventosPut(this.eventos, this.id).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Actualizar evento', detail: 'Completada', life: 3000 });
            for (let i = 0; i < this.evento.length; i++) {
              if (this.evento[i].id == this.eventos.id) {
                this.evento[i] = this.eventos;
                this.visible = false;
              }
            }
            this.visible = false;
            window.location.reload();
          }, 1000);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Actualizar evento', detail: 'Error al actualizar el evento, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }

  showDialog() {
    this.servicioEvento.eventoGet(this.id!).subscribe({
      next: (eve: Evento) => {
        this.ev = eve;
        this.visible = true;
        this.eventos = { ...eve };
        this.latitude = eve.latitud;
        this.longitude = eve.longitud;
        this.eventForm.patchValue({
          nombre: this.eventos.nombre,
          fecha: this.eventos.fecha,
          descrip: this.eventos.descrip,
          latitude: this.latitude,
          longitude: this.longitude
        });
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Cargar evento', detail: 'Error al cargar el evento', life: 3000 });
      }
    });
  }

  async eliminar(b: Boolean) {
    this.servicioEvento.eventosDelete(this.id).subscribe({
      next: (data: any) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Eliminar evento', detail: 'Completada', life: 3000 });
          for (let i = 0; i < this.evento.length; i++) {
            if (this.evento[i].id == this.eventos.id) {
              this.evento[i] = this.ev;
              this.visible = false;
              window.location.reload();
            }
          }
          this.visible = false;
          window.location.reload();
        }, 1000);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Eliminar evento', detail: 'Error al eliminar el evento, inténtelo de nuevo', life: 3000 });
      }
    });
  }
}
