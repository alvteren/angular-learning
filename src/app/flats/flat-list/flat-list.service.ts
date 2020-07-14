import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Flat, FlatResponse } from './flat.model';
import {PromiseState} from '../../shared/promise-state.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlatListService {
  public fetchState$ = new BehaviorSubject<PromiseState | undefined>(undefined);

  constructor(private http: HttpClient) {}

  fetchList = () => {
    this.fetchState$.next('pending')

    return this.http.get<FlatResponse.Palyload>('https://www.sdvor.com/api/common/flats/')
      .pipe<FlatResponse.Palyload, Flat[]>(
        catchError((err)=> {
          this.fetchState$.next('rejected');
          throw err;
        }),
        map<FlatResponse.Palyload, Flat[]>(({results})=> {
          this.fetchState$.next('fulfilled')
          return results.map(({id, category, city,address, square, price})=> ({id, category, city,address, square, price}));
        })
      )
  }
  
}
