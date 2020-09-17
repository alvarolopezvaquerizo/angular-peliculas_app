import { Component, OnInit } from '@angular/core';

// Importamos el archivo peliculas.service.ts
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  // Con esto muestro las peliculas en cartelera
  cartelera: any;
  // Con esto muestro las peliculas populares
  populares: any;
  // Con esto muestro las peliculas populares de niños
  popularesNinos: any;

  constructor( public _ps: PeliculasService ) {

    // Recibo la cartelera
    this._ps.getCartelera()
        .subscribe( data => this.cartelera = data );

    // Recibo las populares
    this._ps.getPopulares()
    .subscribe( data => this.populares = data );

    // Recibo las populares de los niños
    this._ps.getPopularesNinos()
    .subscribe( data => this.popularesNinos = data );

  }

  ngOnInit(): void {
  }

}
