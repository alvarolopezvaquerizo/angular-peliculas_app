import { Component, OnInit } from '@angular/core';

// Importo el servicio de PeliculasService
import { PeliculasService } from '../../services/peliculas.service';

// Importo el ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})

export class BuscarComponent implements OnInit {

  buscar: string = "";

  // Inyectamos el servicio y la ruta
  constructor( public _ps: PeliculasService,
               public route: ActivatedRoute ) {

    this.route.params.subscribe( parametros => {
      console.log(parametros);
      if ( parametros['texto'] ) {
        this.buscar = parametros ['texto'];
        this.buscarPelicula();
      }
    });

  }

  ngOnInit(): void {
  }

  // Funcion de buscar pelicula
  buscarPelicula() {

    // Si el usuario no escribe nada no se dispara la funcion
    if ( this.buscar.length == 0 ) {
      return;
    }

    this._ps.buscarPelicula ( this.buscar )
        .subscribe();

  }

}
