import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//services
import { BackEndService } from '../../services/back-end.service';
import { BookService } from '../../services/book.service';
//interfaces
import { Book } from '../../models/books';
import { Author } from '../../models/author';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './books-dashboard.component.html',
  styleUrls: ['./books-dashboard.component.scss']
})
export class BooksDashboardComponent implements OnInit {
  books: Book[];
  authors: Author[];
  booksLength: number;
  pageSize = 4;
  page = 1;
  maxSize = 3;
  pageSizes: number[] = [4, 10, 20, 30];
  showAuthor = false;
  labelsDateBooks: string[];
  dataBooks: number[];

  constructor(
    private bk: BackEndService,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bk.getBooks().subscribe((data: Book[]) => {
      this.books = data;
      this.booksLength = data.length;
      this.passDataToChart('MMM y');
    });
    this.bk.getAuthors().subscribe((data: Author[]) => {
      this.authors = data;
    });
  }

  passDataToChart(formatOptions) {
    this.dataBooks = new Array();
    const data = this.bookService.avarageData(
      this.bookService.sortOrderForDate(
        this.bookService.filterDateBooks(this.books, formatOptions)
      )
    );
    this.labelsDateBooks = Object.keys(data);
    this.labelsDateBooks.forEach(val => {
      this.dataBooks.push(data[val]);
    });
  }

  changePageSize(pageSize: number) {
    this.pageSize = pageSize;
  }

  filterBooks() {
    if (this.books) {
      return this.bookService.filterForPagination(
        this.page,
        this.pageSize,
        this.books
      );
    }
  }

  currentBookAuthors(id) {
    return this.authors.filter(author => {
      return author.IDBook === id;
    });
  }

  onChangeCharts(label) {
    if (label === 'months') {
      this.passDataToChart('MMM y');
    }
    if (label === 'years') {
      this.passDataToChart('y');
    }
  }

  transitionToBook(event, book) {
    event.stopPropagation();
    this.router.navigate(['/info-book', book]);
  }
}
