import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatFiltersComponent } from './flat-filters.component';

describe('FlatFiltersComponent', () => {
  let component: FlatFiltersComponent;
  let fixture: ComponentFixture<FlatFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
