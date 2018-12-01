import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonnageService} from '../../services/personnage.service';
import {VehiculeService} from '../../services/vehicule.service';

import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import {Personnage} from '../../models/personnage';

@Component({
  selector: 'app-display-whole-list',
  templateUrl: './display-whole-list.component.html',
  styleUrls: ['./display-whole-list.component.css']
})
export class DisplayWholeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'birth_year', 'gender'];
  dataSource = new MatTableDataSource<PersoTemp>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PersoTemp {
  name:string,
  birth_year:string,
  gender:string
}

const ELEMENT_DATA:PersoTemp[] = [
  {name:'C3 PO',birth_year:'1990', gender:'M'},
  {name:'Luke Skywalker', birth_year:'2000', gender:'M'},
  {name:'Leai Organa', birth_year: '2000', gender:'F'}
];
