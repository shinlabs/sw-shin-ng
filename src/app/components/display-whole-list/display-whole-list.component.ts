import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import { VehiculeService} from '../../services/vehicule.service';
import { Router } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Personnage} from '../../models/personnage';

@Component({
  selector: 'app-display-whole-list',
  templateUrl: './display-whole-list.component.html',
  styleUrls: ['./display-whole-list.component.css']
})
export class DisplayWholeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'birth_year', 'gender'];
  dataSource;
  listPersonnages:[];

  constructor(private personnageService: PersonnageService,
              private router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getAllPersonnage();
  }

  async getAllPersonnage() {
    this.listPersonnages=[];
    let promise = new Promise((res, rej) => {
      this.personnageService.getAllPersonnage(this.listPersonnages);
      setTimeout(() => res("done"), 4000);
    });

    let result = await promise;

    this.dataSource = new MatTableDataSource<Personnage>(this.listPersonnages);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  viewDetails(name:string) {
    let pers = this.listPersonnages.find(element => {
      return (<Personnage>element).name === name;
    });

    let pers2 = <Personnage>pers;

    this.router.navigateByUrl("/personnage/details/" + pers2.name, {skipLocationChange:false});

  }


}
