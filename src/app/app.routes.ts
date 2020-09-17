import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    // Esta ruta con /:texto es para que me ponga en el navegador la ruta de ese texto buscado
    { path: 'buscar/:texto', component: BuscarComponent },
    // Esta ruta con /:id es para que me ponga en el navegador la ruta de ese id y con /:pag que es la pagina en la
    // que fue llamada la pelicula
    { path: 'pelicula/:id/:pag', component: PeliculaComponent },
    // Esta ruta con /:busqueda es el texto de la busqueda
    { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
