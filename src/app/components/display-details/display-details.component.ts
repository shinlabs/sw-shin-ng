import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { PlanetService } from '../../services/planet.service';
import { FilmService } from '../../services/film.service';
import { VehiculeService } from '../../services/vehicule.service';
import { environment } from '../../../environments/environment';

import { ActivatedRoute } from '@angular/router';
import {Personnage} from '../../models/personnage';

const URL_IMG = environment.urlImg;

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  personnage: Personnage;
  homeworld: string;
  listeFilms: string[];
  listeVehicules: string[];

  constructor(private activatedRoute: ActivatedRoute,
              private personnageService: PersonnageService,
              private planetService: PlanetService,
              private filmService: FilmService,
              private vehiculeService: VehiculeService) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.personnageService.getPersonnageByName(name).subscribe(res => {
      this.personnage = res.results[0];
      this.planetService.getPlanetByUrl(this.personnage.homeworld).subscribe(resu => {
        this.homeworld = resu.name;
      });
      this.listeFilms = [];
      this.listeVehicules = [];
      this.filmService.getFilmsByUrlList(this.personnage.films, this.listeFilms);
      this.vehiculeService.getVehiculesByUrlList(this.personnage.vehicles, this.listeVehicules);
    });
  }

}
