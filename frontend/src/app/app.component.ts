import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EventoComponent } from './components/evento/evento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule,RippleModule,RouterOutlet,RouterLink,CommonModule,EventoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
