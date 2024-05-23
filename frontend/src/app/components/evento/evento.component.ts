import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditableColumn, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CrearEventoComponent } from '../crear-evento/crear-evento.component';

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    TableModule,
    ButtonModule,
    CrearEventoComponent
  ],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css',
  providers:[
    EventoService
  ]
})
export class EventoComponent {
  constructor(
    private servicioEvento: EventoService
  ){}
  subscriptionUsers: Subscription=new Subscription;
  listaEvento:Array<Evento>=[]
  @Input() admin=true

  ngOnInit(): void{
    this.subscriptionUsers = this.servicioEvento.eventosGet().subscribe({
      next: (data: Array<Evento>) => {
        this.listaEvento=data
      },
    })
  }
}
