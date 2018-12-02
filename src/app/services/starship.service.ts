import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../models/starship';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private httpClient: HttpClient) { }

  getStarshipByUrl(url: string): Observable<Starship> {
    return this.httpClient.get<Starship>(url);
  }

  getStarshipsByUrlList(list: string[], starships: string[]) {
    for (let i = 0; i < list.length; i++) {
      this.getStarshipByUrl(list[i]).subscribe(res => {
        starships.push(res.name);
      });
    }

    setTimeout(function() {
    }, 2000);
  }
}
