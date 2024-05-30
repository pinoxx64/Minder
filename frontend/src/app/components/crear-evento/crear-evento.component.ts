import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ConfirmComponent } from '../confirm/confirm.component';

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
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
    ConfirmComponent
  ],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css',
  providers:[
    EventoService,
    MessageService
  ]

})
export class CrearEventoComponent {
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

  @Input() evento?: any
  @Input() tipo=0
  @Input() visible: boolean = false;

  @Output() cerrarModal = new EventEmitter<void>();

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
  }

  crear(b:Boolean){
    if (b){
        this.messageService.add({ severity: 'info', summary:'Crear evento', detail:'En curso', life:3000});
  
        this.servicioEvento.eventosPost(this.eventos).subscribe({
          next: (data: any) => {
       
            setTimeout(() => {
              this.messageService.add({severity: 'success', summary:'Crear evento', detail:'Completado', life:3000});
              this.eventos.id = data.id
              this.eventos.nombre= ''
              this.eventos.fecha= new Date(1900, 0, 1)
              this.eventos.descrip= ''
              this.eventos.latitud= 0.0
              this.eventos.longitud= 0.0
              window.location.reload() 
            });
          },
          /*error: (error) => {
            this.messageService.add({severity: 'error', summary:'Crear evento', detail:'Ha surguido un error al crear el evento, inténtelo de nuevo', life:3000});
          }*/
        });
    }
  }
}
