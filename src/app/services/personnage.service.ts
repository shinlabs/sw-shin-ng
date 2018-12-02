import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personnage } from '../models/personnage';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

const URL_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpClient: HttpClient) { }

  getPersonnage(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(URL_API + '/people/' + id);
  }

  getAllPersonnage(tableau:Personnage[]) {
    for(var i = 1; i<89; i++) {
      this.getPersonnage(i).subscribe(res=>{
        tableau.push(res);
      });
    }
  }
}
