import { Component, OnInit } from '@angular/core';

import { Flat } from './flat.model';
import {FlatListService} from './flat-list.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {
  list: Observable<Flat[]> | null = null;
  fetchState: FlatListService['fetchState'];

  constructor(private flatListService: FlatListService) { }

  ngOnInit(): void {
    this.list = this.flatListService.fetchList();
    this.fetchState = this.flatListService.fetchState;
  }

}
