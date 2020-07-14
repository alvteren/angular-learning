import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.css']
})
export class FlatDetailComponent implements OnInit, OnDestroy {
  id: number;
  private routeSub: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.routeSub = this.activeRoute.params.subscribe(({id}) => this.id = id)
  }

  ngOnDestroy() {
this.routeSub.unsubscribe();
  }
}
