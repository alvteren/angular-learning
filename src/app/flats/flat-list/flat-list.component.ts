import { Component, OnDestroy, OnInit } from '@angular/core';

import { FlatList } from './flat.model';
import { FlatListService } from './flat-list.service';
import { Observable, Subscription } from 'rxjs';
import { PromiseState } from 'src/app/shared/promise-state.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit, OnDestroy {
  list$: Observable<FlatList> | null = null;
  fetchState: PromiseState;
  fetchStateSubscription: Subscription;
  page: number;
  activeRouteSub: Subscription;

  constructor(private flatListService: FlatListService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.list$ = this.flatListService.fetchList({page:this.page});
    this.fetchStateSubscription = this.flatListService.fetchState$.subscribe((state) => {
      this.fetchState = state
    });
    // TODO: need typings for query params
    this.page = +this.activeRoute.snapshot.queryParams['page'] || 1;
    this.activeRouteSub = this.activeRoute.queryParams.subscribe(({page})=> {
      if(page && +page > 0) {
        this.page = +page;
        this.list$ = this.flatListService.fetchList({page})
      }
    })
  }

  ngOnDestroy() {
    this.fetchStateSubscription.unsubscribe();
    this.activeRouteSub.unsubscribe();
  }
}
