import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlatFiltersService } from './flat-filters.service';

@Component({
  selector: 'app-flat-filters',
  templateUrl: './flat-filters.component.html',
  styleUrls: ['./flat-filters.component.css']
})
export class FlatFiltersComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private flatFiltersService: FlatFiltersService) { }

  ngOnInit(): void {
    this.flatFiltersService.parseQueryParams(this.activeRoute.snapshot.queryParams);
  }

 
}
