import { Component, OnInit } from '@angular/core';

// Importamos el archivo de rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})

export class NavbarComponent implements OnInit {

  // Inyecto el archivo de rutas
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // Funcion de buscar pelicula
  buscarPelicula( texto: string ) {

    // Si no se introduce ningun texto no devuelve nada
    if ( texto.length == 0 ) {
      return;
    }

    this.router.navigate(['buscar', texto]);

  }

}
