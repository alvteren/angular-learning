import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatListComponent } from './flats/flat-list/flat-list.component';
import { HomeComponent } from './home/home.component';
import { FlatsComponent } from './flats/flats.component';
import { FlatDetailComponent } from './flats/flat-detail/flat-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatFiltersComponent } from './flats/flat-list/flat-filters/flat-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatListComponent,
    HomeComponent,
    FlatsComponent,
    FlatDetailComponent,
    PaginationComponent,
    FlatFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
