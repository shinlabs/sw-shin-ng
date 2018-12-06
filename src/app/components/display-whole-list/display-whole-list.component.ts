import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import { VehiculeService} from '../../services/vehicule.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Personnage} from '../../models/personnage';
import {Vehicule} from '../../models/vehicule';
import {PageEvent} from '@angular/material/typings/paginator';

import { NgxSpinnerService } from 'ngx-spinner';

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
              private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.url[0].path;
    this.paginator.disabled = false;
    if (this.menu === 'personnage') {
      this.displayedColumns = ['name', 'birth_year', 'gender'];
      this.getPersonnagesWithPagination(1);
    } else {
      this.displayedColumns = ['name', 'model', 'vehicle_class'];
      this.getVehiculesWithPagination(1);
    }

  }

  getPersonnagesWithPagination(pageNumber: number) {
    this.spinner.show();
    this.personnageService.getPersonnagesWithPagination(pageNumber).subscribe(res => {
      this.listePersonnages = res.results;
      this.dataSource = new MatTableDataSource<Personnage>(this.listePersonnages);
      this.paginator.length = res.count;
      this.spinner.hide();
    });
  }

  getVehiculesWithPagination(pageNumber: number) {
    this.spinner.show();
    this.vehiculeService.getVehiculesWithPagination(pageNumber).subscribe(res => {
      this.listeVehicules = res.results;
      this.dataSource = new MatTableDataSource<Vehicule>(this.listeVehicules);
      this.paginator.length = res.count;
      this.spinner.hide();
    });
  }

  viewDetails(name: string) {
    if (this.menu === 'personnage') {
      this.viewDetailsPersonnage(name);
    } else {
      this.viewDetailsVehicule(name);
    }

  }

  viewDetailsPersonnage(name: string) {
    const pers = this.listePersonnages.find(element => {
      return (<Personnage>element).name === name;
    });

    const pers2 = <Personnage>pers;

    this.router.navigateByUrl('/personnage/details/' + pers2.name, {skipLocationChange: false});
  }

  viewDetailsVehicule(name: string) {
    const vehic = this.listeVehicules.find(element => {
      return (<Vehicule>element).name === name;
    });

    const vehic2 = <Vehicule>vehic;

    this.router.navigateByUrl('/vehicule/details/' + vehic2.name, {skipLocationChange: false});
  }

  displays(event: PageEvent) {
    if (this.menu === 'personnage') {
      this.getPersonnagesWithPagination(event.pageIndex + 1);
    } else if (this.menu === 'vehicule') {
      this.getVehiculesWithPagination(event.pageIndex + 1);
    }
  }


}
