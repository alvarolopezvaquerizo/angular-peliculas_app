// Este componente lo he creado desde la consola de este modo ng g c components/home/galeria -is --flat
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})

export class GaleriaComponent implements OnInit {

  // Con el Input me traigo la data de fuera que se llama peliculas y aqui quiero que se llame peliculas
  @Input('peliculas') peliculas;
  // Con esto recibo el titulo
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit(): void {
  }

}
