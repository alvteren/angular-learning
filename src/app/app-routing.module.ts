import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FlatListComponent} from './flats/flat-list/flat-list.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'flat', component: FlatListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
