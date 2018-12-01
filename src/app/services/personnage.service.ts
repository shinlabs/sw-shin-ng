import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personnage } from '../models/personnage';
import { Observable } from 'rxjs/internal/Observable';

const URL_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpClient: HttpClient) { }

  getPersonnage(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(URL_API + '/people/' + id);
  }
}
