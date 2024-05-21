import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ToastModule,
    ButtonModule,
    DialogModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(

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

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }
}
