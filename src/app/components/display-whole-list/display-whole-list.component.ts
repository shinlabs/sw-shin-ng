import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import { VehiculeService} from '../../services/vehicule.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Personnage} from '../../models/personnage';
import {Vehicule} from '../../models/vehicule';

@Component({
  selector: 'app-display-whole-list',
  templateUrl: './display-whole-list.component.html',
  styleUrls: ['./display-whole-list.component.css']
})
export class DisplayWholeListComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
  listePersonnages: [];
  listeVehicules: [];
  menu: string; // 'personnage' ou 'vehicule'

  constructor(private personnageService: PersonnageService,
              private vehiculeService: VehiculeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.url[0].path;
    if (this.menu === 'personnage') {
      this.displayedColumns = ['name', 'birth_year', 'gender'];
      this.getAllPersonnage();
    } else {
      this.displayedColumns = ['name', 'model', 'vehicle_class'];
      this.getAllVehicule();
    }

  }

  async getAllPersonnage() {
    this.listePersonnages = [];
    const promise = new Promise((res, rej) => {
      this.personnageService.getAllPersonnage(this.listePersonnages);
      setTimeout(() => res('done'), 4000);
    });

    const result = await promise;

    this.dataSource = new MatTableDataSource<Personnage>(this.listePersonnages);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  async getAllVehicule() {
    this.listeVehicules = [];
    const promise = new Promise((res, rej) => {
      this.vehiculeService.getAllVehicules(this.listeVehicules);
      setTimeout(() => res('done'), 4000);
    });

    const result = await promise;

    this.dataSource = new MatTableDataSource<Personnage>(this.listeVehicules);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  viewDetails(name: string) {
    if (this.menu === 'personnage') {
      this.detailsPersonnage(name);
    } else {
      this.detailsVehicule(name);
    }

  }

  detailsPersonnage(name: string) {
    const pers = this.listePersonnages.find(element => {
      return (<Personnage>element).name === name;
    });

    const pers2 = <Personnage>pers;

    this.router.navigateByUrl('/personnage/details/' + pers2.name, {skipLocationChange: false});
  }

  detailsVehicule(name: string) {
    const vehic = this.listeVehicules.find(element => {
      return (<Vehicule>element).name === name;
    });

    const vehic2 = <Vehicule>vehic;

    this.router.navigateByUrl('/vehicule/details/' + vehic2.name, {skipLocationChange: false});
  }


}
