import { Component, OnInit } from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import {VehiculeService} from '../../services/vehicule.service';

@Component({
  selector: 'app-display-whole-list',
  templateUrl: './display-whole-list.component.html',
  styleUrls: ['./display-whole-list.component.css']
})
export class DisplayWholeListComponent implements OnInit {

  public listPersonnage: [];
  public listVehicle: [];


  constructor(private personnageService: PersonnageService,
              private vehiculeService: VehiculeService) { }

  ngOnInit() {
  }

}
