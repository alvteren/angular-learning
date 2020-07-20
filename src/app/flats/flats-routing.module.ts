import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { FlatListComponent } from './flat-list/flat-list.component'
import { FlatsComponent } from './flats.component';

const routes: Routes = [
  { 
    path: '',
    component: FlatsComponent,
    children: [
      {path: '', component: FlatListComponent},
      {path: ':id', component: FlatDetailComponent}
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlatsRoutingModule { }
