//se apunta mal la id del evento
/*import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';       
import { ToastModule } from 'primeng/toast';
import { UsuarioEventoService } from '../../service/usuarioEvento.service';
import { UsuarioEvento } from '../../interface/usuarioEvento';
import { AuthService } from '../../service/auth.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { VistaEventoComponent } from '../vista-evento/vista-evento.component';
import { DialogModule } from 'primeng/dialog';
import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
import { FormGroup, FormsModule, FormControl } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-apuntarse',
  standalone: true,
  imports: [
    ConfirmDialogModule,
    ToastModule,
    ConfirmComponent, 
    VistaEventoComponent,
    DialogModule,
    FormsModule,
    GoogleMapsModule
  ],
  templateUrl: './apuntarse.component.html',
  styleUrl: './apuntarse.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ApuntarseComponent {
  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService, 
    private servicioUsuarioEvento: UsuarioEventoService,
    private servicioAuth: AuthService,
    private servicioEvento: EventoService
  ) {}
  @Output() confirmacion = new EventEmitter<boolean>();
  @Output() cerrarModal = new EventEmitter<void>();
  @Input() tipo= 0
  @Input() idEvento!: number;

  @Input() icono=''
  iconoFinal='pi pi-'

  @Input() evento?: any;
  @Input() id!: number;
  ev!: Evento;
  eventForm!: FormGroup;
  zoom: number = 12;

  eventos: Evento = { 
    id: 0, 
    nombre: '', 
    fecha: new Date(1900, 0, 1),
    descrip: '', 
    latitud: 0.0,
    longitud: 0.0
  };
  
 usuarioEventos: UsuarioEvento = {
  id: 0,
  idUsuario: this.servicioAuth.getUid(),
  idEvento: 0//this.eventos.id
 }


latitude: number = this.eventos.latitud;
longitude: number = this.eventos.longitud;
 @Input() visible: boolean = false;

 ngOnInit(): void {
  this.usuarioEventos.idEvento = this.idEvento!;
  
  this.eventForm = new FormGroup({
    nombre: new FormControl(this.eventos.nombre),
    fecha: new FormControl(this.eventos.fecha),
    descrip: new FormControl(this.eventos.descrip),
    latitude: new FormControl(this.latitude),
    longitude: new FormControl(this.longitude)
  });
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

 unirse(b: Boolean){
  this.messageService.add({ severity: 'info', summary: 'Crear evento', detail: 'En curso', life: 3000 });

  this.servicioUsuarioEvento.usuarioEventosPost(this.usuarioEventos).subscribe({
    next: (data: any) => {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Crear evento', detail: 'Completado', life: 3000 });
        for (let i = 0; i < this.evento.length; i++) {
          console.log(this.evento[i].id)
          console.log(this.eventos.id)
          if (this.evento[i].id == this.eventos.id) {
            this.usuarioEventos.id = data.id;
            this.usuarioEventos.idEvento = this.id
            this.usuarioEventos.idUsuario = this.servicioAuth.getUid()
            this.visible= false
            window.location.reload();
          }
        }
      });
    },
    error: (error) => {
      this.messageService.add({ severity: 'error', summary: 'Crear evento', detail: 'Ha surgido un error al crear el evento, inténtelo de nuevo', life: 3000 });
    }
    });
  }
  showDialog(){
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

  cerrar(): void {
    this.cerrarModal.emit();
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
import { UsuarioEventoService } from '../../service/usuarioEvento.service';
import { UsuarioEvento } from '../../interface/usuarioEvento';
import { AuthService } from '../../service/auth.service';
import { VistaEventoComponent } from '../vista-evento/vista-evento.component';

@Component({
  selector: 'app-apuntarse',
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
    GoogleMapsModule,
    VistaEventoComponent
  ],
  templateUrl: './apuntarse.component.html',
  styleUrls: ['./apuntarse.component.css'],
  providers: [DialogService, MessageService, EventoService, UsuarioEventoService]
})
export class ApuntarseComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private servicioEvento: EventoService,
    private servicioUsuarioEvento: UsuarioEventoService,
    private servicioAuth: AuthService
  ) { }

  @Input() eventId!: number;
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

  usuarioEventos: UsuarioEvento = {
    id: 0,
    idEvento: this.id,
    idUsuario: this.servicioAuth.getUid()
  }

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

  async unirse(b: Boolean) {
    if (b) {
      this.usuarioEventos.idEvento = this.eventId;
      this.eventos.latitud = this.latitude;
      this.eventos.longitud = this.longitude;

      this.servicioUsuarioEvento.usuarioEventosPost(this.usuarioEventos).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Actualizar evento', detail: 'Completada', life: 3000 });
            for (let i = 0; i < this.evento.length; i++) {
              if (this.evento[i].id == this.eventos.id) {
                this.usuarioEventos.id = data.id;
                //this.usuarioEventos.idEvento = this.eventId
                //this.usuarioEventos.idUsuario = this.servicioAuth.getUid()
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
}
