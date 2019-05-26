import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/books';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.scss']
})
export class InfoBookComponent implements OnInit, OnDestroy {
  private sub: any;
  infoBooks: object;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.infoBooks = params;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
