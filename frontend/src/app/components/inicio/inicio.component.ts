import { Component, OnInit } from '@angular/core';
//import de los usuarios y todo lo relacionado
//import de los services
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule],
  providers: [],//aqui va los services
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  /*products!: Product[]; esto es la interfaz que queremos hacer

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }*/
}
