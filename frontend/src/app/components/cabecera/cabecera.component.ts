import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule
  ],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  constructor(
    public servicioAuth: AuthService
  ){}
}
