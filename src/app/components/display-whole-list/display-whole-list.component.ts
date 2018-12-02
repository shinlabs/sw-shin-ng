import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import {VehiculeService} from '../../services/vehicule.service';

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

  constructor(private personnageService: PersonnageService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getAllPersonnage();
  }

  async getAllPersonnage() {
    let tableau=[];
    let promise = new Promise((res, rej) => {
      this.personnageService.getAllPersonnage(tableau);
      setTimeout(() => res("done"), 4000);
    });

    let result = await promise;

    this.dataSource = new MatTableDataSource<Personnage>(tableau);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  viewDetails(name:string) {

  }


}
