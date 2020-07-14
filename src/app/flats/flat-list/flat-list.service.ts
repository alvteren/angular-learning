import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { FlatList, FlatResponse } from './flat.model';
import {PromiseState} from '../../shared/promise-state.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlatListService {
  public fetchState$ = new BehaviorSubject<PromiseState | undefined>(undefined);

  constructor(private http: HttpClient) {}

  fetchList = ({page = 1, size = 10}) => {
    this.fetchState$.next('pending')

    return this.http.get<FlatResponse.Palyload>('https://www.sdvor.com/api/common/flats/', 
      {
        params: new HttpParams({fromObject: {page: `${page}`, page_size: `${size}`}})
      })
      .pipe<FlatResponse.Palyload, FlatList>(
        catchError((err)=> {
          this.fetchState$.next('rejected');
          throw err;
        }),
        map<FlatResponse.Palyload, FlatList>(({results, count})=> {
          this.fetchState$.next('fulfilled')
          return {count, items: results.map(({id, category, city,address, square, price})=> ({id, category, city,address, square, price}))};
        })
      )
  }
  
}
