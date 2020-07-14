import { TestBed } from '@angular/core/testing';

import { FlatFiltersService } from './flat-filters.service';

describe('FlatFiltersService', () => {
  let service: FlatFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
