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
