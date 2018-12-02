import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../models/vehicule';
import { Observable } from 'rxjs/internal/Observable';

const URL_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private httpClient: HttpClient) { }

  getVehiculeById(id: number): Observable<Vehicule> {
    return this.httpClient.get<Vehicule>(URL_API + '/vehicles/' + id);
  }

  getAllVehicules(tableau: Vehicule[]) {
    for (let i = 1; i <= 39; i++) {
      this.getVehiculeById(i).subscribe(res => {
        tableau.push(res);
      });
    }

    setTimeout(function() {
    }, 4000);
  }

  getVehiculeByUrl(url: string): Observable<Vehicule> {
    return this.httpClient.get<Vehicule>(url);
  }
  getVehiculesByUrlList(list: string[], vehicules: string[]) {
    for (let i = 0; i < list.length; i++) {
      this.getVehiculeByUrl(list[i]).subscribe(res => {
        vehicules.push(res.name);
      });
    }

    setTimeout(function() {
    }, 2000);
  }

}
