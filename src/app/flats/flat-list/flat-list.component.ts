import { Component, OnDestroy, OnInit } from '@angular/core';

import { Flat } from './flat.model';
import {FlatListService} from './flat-list.service';
import { Observable, Subscription } from 'rxjs';
import { PromiseState } from 'src/app/shared/promise-state.model';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit, OnDestroy {
  list$: Observable<Flat[]> | null = null;
  fetchState: PromiseState;
  fetchStateSubscription: Subscription;

  constructor(private flatListService: FlatListService) { }

  ngOnInit(): void {
    this.list$ = this.flatListService.fetchList();
    this.fetchStateSubscription = this.flatListService.fetchState$.subscribe((state) => {
      console.log(state)
      this.fetchState = state
    });
  }

  ngOnDestroy() {
    this.fetchStateSubscription.unsubscribe();
  }
}
