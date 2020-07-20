import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {FilterQueryParams, Filter} from './filter.model'
import { toQueryParams } from '../../../shared/utils/toQueryParams/toQueryParams';
import {FlatRequest} from '../flat.model';

@Injectable({
  providedIn: 'root'
})
export class FlatFiltersService {
  filters: Filter;

  constructor() { }

  parseQueryParams = (queryParams:FilterQueryParams) => {
    this.filters = {
      city: queryParams.city,
      category: Array.isArray(queryParams.category) || typeof queryParams.category === 'undefined'  ? queryParams.category : [queryParams.category],
      rooms: Array.isArray(queryParams.room_count) || typeof queryParams.room_count === 'undefined'  ? queryParams.room_count : [queryParams.room_count],
    }
  }

  toQueryParams = ():string => {
    const queryParams:FilterQueryParams = {
      city: this.filters.city,
      category: this.filters.category,
      room_count: this.filters.rooms,
    }

    return toQueryParams(queryParams,'double');
  }

  toApiParams = ():string =>{
    const params:FlatRequest.Filters = {
      city_id: this.filters.city,
      category_id__in: this.filters.category,
      num_rooms__in: this.filters.rooms,
    }

    return toQueryParams(params, 'commas');
  }
}
