import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Species } from '../models/species';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private httpClient: HttpClient) { }

  getSpeciesByUrl(url: string): Observable<Species> {
    return this.httpClient.get<Species>(url);
  }

  getSpeciesByUrlList(list: string[], species: string[]) {
    for (let i = 0; i < list.length; i++) {
      this.getSpeciesByUrl(list[i]).subscribe(res => {
        species.push(res.name);
      });
    }

    setTimeout(function() {
    }, 2000);
  }
}
