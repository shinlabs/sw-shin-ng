import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayWholeListComponent} from './components/display-whole-list/display-whole-list.component';
import {DisplayDetailsComponent} from './components/display-details/display-details.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {path: 'personnage/all', component: DisplayWholeListComponent},
  {path: 'vehicule/all', component: DisplayWholeListComponent},
  {path: 'personnage/details/:name', component: DisplayDetailsComponent},
  {path: 'vehicule/details/:name', component: DisplayDetailsComponent},
  {path: '', component: MainComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
