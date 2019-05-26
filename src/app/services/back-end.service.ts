import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  private uri = 'http://fakerestapi.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>(`${this.uri}/Books`);
  }

  getAuthors() {
    return this.http.get(`${this.uri}/Authors`);
  }
}
