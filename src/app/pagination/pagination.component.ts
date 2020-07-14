import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  /** current page */
  @Input('page') currentPage: number;
  /** items on a page */
  @Input() size = 10;
  /** amount items */
  @Input() count: number;

  get isHidden() {
    return this.pages.length <= 1
  }

  get pages() {
    return Array(Math.ceil(this.count / this.size)).fill(null).map((_v, index)=>index + 1);
  }

  get routerLink() {
    return this.activeRoute.snapshot.url;
  }

  constructor(private activeRoute: ActivatedRoute) { }
 
}
