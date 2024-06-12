//si no funciona probar con el subscription
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';       
import { ToastModule } from 'primeng/toast';
import { UsuarioEventoService } from '../../service/usuarioEvento.service';
import { UsuarioEvento } from '../../interface/usuarioEvento';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-apuntarse',
  standalone: true,
  imports: [ConfirmDialogModule,ToastModule],
  templateUrl: './apuntarse.component.html',
  styleUrl: './apuntarse.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ApuntarseComponent {
  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService, 
    private servicioUsuarioEvento: UsuarioEventoService,
    private servicioAuth: AuthService
  ) {}
  @Output() confirmacion = new EventEmitter<boolean>();
  @Input() tipo=''
 @Input() color='success'
 @Input() mensaje='¿Desea apuntarse al evento?'
 mensajeLbl=this.mensaje
 @Input() icono=''
 iconoFinal='pi pi-'
 usuarioEventos: UsuarioEvento = {
  id: 0,
  idUsuario: 0,
  idEvento: 0
 }
 ngOnInit(): void {

  this.mensajeLbl=this.mensaje
  this.iconoFinal=this.iconoFinal+this.icono
 }

 unirse(b: Boolean){
  this.messageService.add({ severity: 'info', summary: 'Crear evento', detail: 'En curso', life: 3000 });

  this.servicioUsuarioEvento.usuarioEventosPost(this.usuarioEventos).subscribe({
    next: (data: any) => {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Crear evento', detail: 'Completado', life: 3000 });
        this.usuarioEventos.id = data.id;
        this.usuarioEventos.idUsuario = this.servicioAuth.getUid()
        this.usuarioEventos.idEvento = 0
        window.location.reload();
      });
    },
    error: (error) => {
      this.messageService.add({ severity: 'error', summary: 'Crear evento', detail: 'Ha surgido un error al crear el evento, inténtelo de nuevo', life: 3000 });
    }
  });
}
 }

