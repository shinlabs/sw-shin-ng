import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {DisplayWholeListComponent} from './components/display-whole-list/display-whole-list.component';

const routes: Routes = [
  {path: 'personnage/all', component: DisplayWholeListComponent},
  {path: 'vehicule/all', component: DisplayWholeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
