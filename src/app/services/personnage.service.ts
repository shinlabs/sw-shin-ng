import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../models/vehicule';
import { Observable } from 'rxjs/internal/Observable';

const URL_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpClient: HttpClient) { }

  getPersonnage(id: number): Observable<Vehicule> {
    return this.httpClient.get<Vehicule>(URL_API + '/people/' + id);
  }
}
