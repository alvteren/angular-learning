import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get<FlatResponse.Palyload>('https://www.sdvor.com/api/common/flats/')
      .pipe<FlatResponse.Palyload, any, Flat[], Flat[]>(
        tap((arg)=> {
          console.log('pending', arg)
          this.fetchState$.next('pending')
        }),
        catchError((err)=> {
          this.fetchState$.next('rejected');
          throw err;
        }),
        map(({results})=> {
          return results.map(({id, category, city,address, square, price})=> ({id, category, city,address, square, price}));
        }),
        tap((arg)=>{
          console.log('fulfilled', arg)
          this.fetchState$.next('fulfilled')
        })
      )
  }
  
}
