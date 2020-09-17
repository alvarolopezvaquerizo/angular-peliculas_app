// Para generar este servicio pongo en la consola ng g s services/peliculas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class PeliculasService {

  peliculas: any[] = [];

  private apikey: string = 'f96c0d719c1f71494b2dff28e2fb28a3';
  private urlMoviedb: string = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  // OBTENER LA LISTA DE PELICULAS DE LA CARTELERA
  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = desde.toISOString().substring(0, 10);
    let hastaStr = hasta.toISOString().substring(0, 10);

    console.log(desdeStr);
    console.log(hastaStr);

    let url = `${this.urlMoviedb}discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));

  }

  // OBTENER LA LISTA DE PELICULAS MAS POPULARES
  getPopulares() {

    // Con &language=es le indico que me traiga las peliculas mas populares en español
    let url = `${ this.urlMoviedb }discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url).pipe(map((res: any) => res.results));

  }

  // OBTENER LA LISTA DE PELICULAS MAS POPULARES DE NIÑOS
  getPopularesNinos() {

    let url = `${this.urlMoviedb}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));

  }

  // BUSCAR PELICULAS
  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(
      map((res: any) => {
        this.peliculas = res.results;
        return res.results;
      })
    );

  }

  // OBTENER UNA PELICULA
  getPelicula(id: string) {

    let url = `${this.urlMoviedb}movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res: any) => res));

  }

}
