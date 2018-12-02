import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getFilmByUrl(url: string): Observable<Film> {
    return this.httpClient.get<Film>(url);
  }

  getFilmsByUrlList(list: string[], noms: string[]) {
    for (let i = 0; i < list.length; i++) {
      this.getFilmByUrl(list[i]).subscribe(res => {
        noms.push(res.title);
      });
    }

    setTimeout(function() {
    }, 2000);
  }
}
