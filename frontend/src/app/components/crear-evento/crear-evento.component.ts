import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ConfirmComponent } from '../confirm/confirm.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-crear-evento',
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
    GoogleMapsModule
  ],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
  providers: [
    EventoService,
    MessageService
  ]
})
export class CrearEventoComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private servicioEvento: EventoService
  ){}

  eventos: Evento = { 
    id: 0, 
    nombre: '', 
    fecha: new Date(2024, 0, 1),
    descrip: '',
    latitud: 0.0,
    longitud: 0.0
  }

  @Input() evento?: any;
  @Input() tipo = 0;
  @Input() visible: boolean = false;

  @Output() cerrarModal = new EventEmitter<void>();

  formGroup: FormGroup | undefined;

  eventForm!: FormGroup;
  latitude: number = this.eventos.latitud;
  longitude: number = this.eventos.longitud; 
  zoom: number = 12;

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  ngOnInit() {
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

  crear(b: Boolean) {
    if (b) {
      this.messageService.add({ severity: 'info', summary: 'Crear evento', detail: 'En curso', life: 3000 });

      this.eventos.latitud = this.latitude;
      this.eventos.longitud = this.longitude;

      this.servicioEvento.eventosPost(this.eventos).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Crear evento', detail: 'Completado', life: 3000 });
            this.eventos.id = data.id;
            this.eventos.nombre = '';
            this.eventos.fecha = new Date(1900, 0, 1);
            this.eventos.descrip = '';
            this.eventos.latitud = 0.0;
            this.eventos.longitud = 0.0;
            window.location.reload();
          });
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Crear evento', detail: 'Ha surgido un error al crear el evento, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}
