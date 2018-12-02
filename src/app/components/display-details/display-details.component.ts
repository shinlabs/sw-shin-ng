import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { PlanetService } from '../../services/planet.service';
import { FilmService } from '../../services/film.service';
import { VehiculeService } from '../../services/vehicule.service';
import { SpeciesService } from '../../services/species.service';
import { environment } from '../../../environments/environment';

import { ActivatedRoute } from '@angular/router';
import {Personnage} from '../../models/personnage';
import {StarshipService} from '../../services/starship.service';

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
  listeSpecies: string[];
  listeStarships: string[];

  menu: string; // 'personnage' ou 'vehicule'

  constructor(private activatedRoute: ActivatedRoute,
              private personnageService: PersonnageService,
              private planetService: PlanetService,
              private filmService: FilmService,
              private vehiculeService: VehiculeService,
              private speciesService: SpeciesService,
              private starshipService: StarshipService) { }

  ngOnInit() {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    this.menu = this.activatedRoute.snapshot.url[0].path;
    if (this.menu === 'personnage') {
      this.detailsPersonnage(name);
    } else {
    }

  }

  detailsPersonnage(name: string) {
    this.personnageService.getPersonnageByName(name).subscribe(res => {
      this.personnage = res.results[0];
      this.planetService.getPlanetByUrl(this.personnage.homeworld).subscribe(resu => {
        this.homeworld = resu.name;
      });
      this.listeFilms = [];
      this.listeVehicules = [];
      this.listeSpecies = [];
      this.listeStarships = [];
      this.filmService.getFilmsByUrlList(this.personnage.films, this.listeFilms);
      this.vehiculeService.getVehiculesByUrlList(this.personnage.vehicles, this.listeVehicules);
      this.speciesService.getSpeciesByUrlList(this.personnage.species, this.listeSpecies);
      this.starshipService.getStarshipsByUrlList(this.personnage.starships, this.listeStarships);
    });
  }

}
