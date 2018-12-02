import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';

import { ActivatedRoute } from '@angular/router';
import {Personnage} from '../../models/personnage';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  personnage:Personnage;

  constructor(private activatedRoute: ActivatedRoute,
              private personnageService: PersonnageService) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.personnageService.getPersonnageByName(name).subscribe(res => {
      this.personnage = res.results[0];
    })
  }

}
