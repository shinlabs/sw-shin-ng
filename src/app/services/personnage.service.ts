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

  getPersonnageById(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(URL_API + '/people/' + id);
  }

  getPersonnageByName(name: string): Observable<any> {
    return this.httpClient.get<any>(URL_API + '/people/?search=' + name);
  }

  getAllPersonnage(tableau: Personnage[]) {
    for (let i = 1; i < 89; i++) {
      this.getPersonnageById(i).subscribe(res => {
        tableau.push(res);
      });
    }

    setTimeout(function() {
    }, 4000);
  }
}
