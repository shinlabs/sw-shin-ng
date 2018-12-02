import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor() { }
}
