import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {FlatsRoutingModule} from './flats-routing.module';
import { FlatFiltersComponent } from './flat-list/flat-filters/flat-filters.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatsComponent } from './flats.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FlatsComponent,
    FlatFiltersComponent,
    FlatDetailComponent,
    FlatListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FlatsRoutingModule,
    SharedModule
  ]
})
export class FlatsModule { }
