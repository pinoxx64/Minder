import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditableColumn, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CrearEventoComponent } from '../crear-evento/crear-evento.component';
import { ApuntarseComponent } from '../apuntarse/apuntarse.component';
import { AgmCoreModule } from '@agm/core';

import { Evento } from '../../interface/evento';
import { EventoService } from '../../service/evento.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-vista-evento',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    TableModule,
    ButtonModule,
    CrearEventoComponent,
    ApuntarseComponent,
    GoogleMapsModule
  ],
  templateUrl: './vista-evento.component.html',
  styleUrl: './vista-evento.component.css',
  providers:[
    EventoService
  ]
})
export class VistaEventoComponent {
  constructor(
    private servicioEvento: EventoService
  ){}
  subscriptionUsers: Subscription=new Subscription;
  listaEvento:Array<Evento>=[]
  center: google.maps.LatLngLiteral = {
    lat: 0.2736308,
    lng: 0.7512555
  };
  zoom = 6;
  display: any;
  @Input() admin=true

  ngOnInit(): void{
    this.subscriptionUsers = this.servicioEvento.eventosGet().subscribe({
      next: (data: Array<Evento>) => {
        this.listaEvento=data
      },
    })
  }

}
