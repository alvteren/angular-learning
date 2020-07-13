import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Flat, FlatResponse } from './flat.model';
import {PromiseState} from '../../shared/promise-state.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlatListService {
  public fetchState = new Subject<PromiseState>();

  constructor(private http: HttpClient) {}

  fetchList = () => {
    return this.http.get<FlatResponse.Palyload>('https://www.sdvor.com/api/common/flats/')
      .pipe<any, any, Flat[]>(
        tap(()=> this.fetchState.next('pending')),
        catchError((err)=> {
          this.fetchState.next('rejected');
          throw err;
        }),
        map(({results})=> {
          this.fetchState.next('fulfilled');
          return results.map(({id, category, city,address, square, price})=> ({id, category, city,address, square, price}));
        })
      )
  }
  
}
