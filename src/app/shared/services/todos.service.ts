import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private model = 'todos';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  find(todoId: any) {
    return this.http.get(this.getUrlById(todoId));
  }

  create(todo: any) {
    return this.http.post(this.getUrl(), todo);
  }

  update(todo: any) {
    return this.http.put(this.getUrlById(todo.id), todo);
  }

  delete(todoId: any) {
    return this.http.delete(this.getUrlById(todoId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }
}
