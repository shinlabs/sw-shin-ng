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

  getPersonnageByUrl(url: string): Observable<Personnage> {
    return this.httpClient.get<Personnage>(url);
  }

  getPersonnagesWithPagination(page: number): Observable<any> {
    return this.httpClient.get<any>(URL_API + '/people/?page=' + page);
  }

  getPersonnagesByUrlList(list: string[], personnages: string[]) {
    for (let i = 0; i < list.length; i++) {
      this.getPersonnageByUrl(list[i]).subscribe(res => {
        personnages.push(res.name);
      });
    }

    setTimeout(function() {
    }, 2000);
  }
}
