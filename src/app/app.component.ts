import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Sismos {
  horaLocal: string;
  horaUtc: string;
  latitud: number;
  longitud: number;
  magnitud: number;
  profundidad: string;
  referencia: string;
  mapa: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sismos: Sismos[] = [];
  filteredSismo: Sismos[] = [];
  titles: string[] = ['ID', 'Hora Local', 'Referencia', 'Latitud', 'Magnitud', 'Profundidad', 'Referencia (Mapa)'];

  searchText = '';

  constructor(private http: HttpClient) { }

  /* searchCoin() {
    this.filteredIndicador = this.indicadores.filter((indicador) => indicador.nombre.toLowerCase().includes(this.searchText.toLowerCase())) ||
      this.indicadores.filter((indicador) => indicador.codigo.toLowerCase().includes(this.searchText.toLowerCase()));
  } */

  ngOnInit() {
    this.http.get<Sismos[]>('https://api-sismologia-chile.herokuapp.com').subscribe(
      (res) => {
        console.log(res);
        this.sismos = res;
        this.filteredSismo = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
