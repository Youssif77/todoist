import { Component, OnInit } from '@angular/core';
import { TodosService } from './../shared/services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedTodo: any = null;
  todos: any = null;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.resetSelectedTodo();
    this.loadTodo();
  }

  resetSelectedTodo() {
    const emptyTodo = {
      id: null,
      title: '',
      description: '',
      complete: false,
    };

    this.selectedTodo = emptyTodo;
  }

  selectTodo(todo: any) {
    console.log('Hola');
    this.selectedTodo = todo;
  }

  loadTodo() {
    this.todosService.all().subscribe((todos: any) => (this.todos = todos));
  }

  refreshTodos() {
    this.resetSelectedTodo();
    this.loadTodo();
  }

  saveTodo(todo: any) {
    if (todo.id) {
      this.todosService.update(todo).subscribe((_) => this.refreshTodos());
    } else {
      this.todosService.create(todo).subscribe((_) => this.refreshTodos());
    }
  }

  deleteTodo(todoId: any) {
    this.todosService.delete(todoId).subscribe((_) => this.refreshTodos());
  }

  cancel() {
    this.resetSelectedTodo();
  }
}
