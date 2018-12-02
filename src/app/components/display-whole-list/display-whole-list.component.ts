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
  //dataSource = new MatTableDataSource<PersoTemp>(ELEMENT_DATA);
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

    /*this.personnageService.getPersonnage(1).subscribe(res=>{
      let pers = res;
      this.personnageService.getPersonnage(2).subscribe(res => {
        this.dataSource = new MatTableDataSource<Personnage>([res,pers]);
      });
    });*/


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
