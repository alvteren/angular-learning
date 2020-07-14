import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatDetailComponent } from './flats/flat-detail/flat-detail.component';
import { FlatListComponent } from './flats/flat-list/flat-list.component'
import { FlatsComponent } from './flats/flats.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'flat', component: FlatsComponent, children: [
    {path: '', component: FlatListComponent},
    {path: ':id', component: FlatDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
