import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../models/planet';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private httpClient: HttpClient) { }

  getPlanetByUrl(url: string): Observable<Planet> {
    return this.httpClient.get<Planet>(url);
  }
}
