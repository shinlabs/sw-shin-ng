import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { PlanetService } from '../../services/planet.service';
import { FilmService } from '../../services/film.service';
import { VehiculeService } from '../../services/vehicule.service';
import { SpeciesService } from '../../services/species.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import {Personnage} from '../../models/personnage';
import {StarshipService} from '../../services/starship.service';
import {Vehicule} from '../../models/vehicule';
import {FormControl, FormGroup} from '@angular/forms';

import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

const URL_IMG = environment.urlImg;

// @ts-ignore
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  personnage: Personnage;
  vehicule: Vehicule;
  homeworld: string;
  listeFilms: string[];
  listeVehicules: string[];
  listeSpecies: string[];
  listeStarships: string[];
  listePilots: string[];

  formSearch: FormGroup;
  resourceToSearch: string;

  multipleSearchResults: boolean;
  namesInList: string[];

  menu: string; // 'personnage' ou 'vehicule'

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private personnageService: PersonnageService,
              private planetService: PlanetService,
              private filmService: FilmService,
              private vehiculeService: VehiculeService,
              private speciesService: SpeciesService,
              private starshipService: StarshipService,
              private toastService: ToastrService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    this.multipleSearchResults = false;
    this.menu = this.activatedRoute.snapshot.url[0].path;
    if (this.menu === 'personnage') {
      this.detailsPersonnage(name);
    } else {
      this.detailsVehicule(name);
    }

    this.creationFormSearch();
  }

  creationFormSearch() {
    this.formSearch = new FormGroup({
      recherche: new FormControl('')
    });
    this.formSearch.controls['recherche'].valueChanges.subscribe(value => {
      this.resourceToSearch = value;
    });
  }

  detailsPersonnage(name: string) {
    this.spinner.show();
    this.personnage = undefined;
    this.personnageService.getPersonnageByName(name).subscribe(res => {
      if (res.count === 0) {
        this.toastService.error('La ressource n\'existe pas', 'Oups !');
        this.spinner.hide();
      } else if (res.count >= 2) {
        this.namesInList = [];
        this.multipleSearchResults = true;
        res.results.forEach(element => {
          this.namesInList.push(element.name);
        });
        this.spinner.hide();
      } else {
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
          this.spinner.hide();

        }
    });
  }

  detailsVehicule(name: string) {
    this.spinner.show();
    this.vehicule = undefined;
    this.vehiculeService.getVehiculeByName(name).subscribe(res => {
      if (res.count === 0) {
        this.toastService.error('La ressource n\'existe pas', 'Oups !');
        this.spinner.hide();
      } else if (res.count >= 2) {
        this.namesInList = [];
        this.multipleSearchResults = true;
        res.results.forEach(element => {
          this.namesInList.push(element.name);
        });
        this.spinner.hide();
      } else {
      this.vehicule = res.results[0];
      this.listeFilms = [];
      this.listePilots = [];
      this.filmService.getFilmsByUrlList(this.vehicule.films, this.listeFilms);
      this.personnageService.getPersonnagesByUrlList(this.vehicule.pilots, this.listePilots);
      this.spinner.hide();
    }
    });
  }

  goSearch() {
    this.multipleSearchResults = false;
    if (this.menu === 'personnage') {
      this.router.navigateByUrl('/personnage/details/' + this.resourceToSearch, {skipLocationChange: false});
      this.detailsPersonnage(this.resourceToSearch);
    } else {
      this.router.navigateByUrl('/vehicule/details/' + this.resourceToSearch, {skipLocationChange: false});
      this.detailsVehicule(this.resourceToSearch);
    }

    this.creationFormSearch();
  }

  fillResourceToSearch(name: string) {
    this.resourceToSearch = name;
    this.goSearch();
  }

}
