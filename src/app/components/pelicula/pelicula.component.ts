import { Component, OnInit } from '@angular/core';

// Importo el servicio de PeliculasService
import { PeliculasService } from '../../services/peliculas.service';

// Importo el ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})

export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = "";
  busqueda: string = "";

  // Inyectamos el servicio y la ruta
  constructor( public _ps: PeliculasService,
               public route: ActivatedRoute ) {

    this.route.params.subscribe( parametros => {

      console.log(parametros);

      // Regresar a la pagina anterior
      this.regresarA = parametros['pag'];

      // Obtengo el texto introducido en la busqueda que lo pongo en la direccion url
      if ( parametros['busqueda'] ) {
        this.busqueda = parametros['busqueda'];
      }

      // Obtengo la pelicula
      this._ps.getPelicula( parametros['id'] )
              .subscribe( pelicula => this.pelicula = pelicula );

    });

}

  ngOnInit(): void {
  }

}
