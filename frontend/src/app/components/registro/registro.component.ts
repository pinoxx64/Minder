import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../service/usuario.service';
import { Preferencia } from '../../interface/preferencia';
import { PreferenciaService } from '../../service/preferencia.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    ReactiveFormsModule, 
    CalendarModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(
    private servicioUsuario: UsuarioService
  ){}
  usuarios: Usuario = { 
    id: 0, 
    nombre: '', 
    correo: '', 
    fechaNacimiento: new Date(1900, 0, 1),
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

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          date: new FormControl<Date | null>(null)
      });
  }
}
