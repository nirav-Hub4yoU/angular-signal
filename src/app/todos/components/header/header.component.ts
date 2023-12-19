import { Component, inject } from '@angular/core';
import { TodoService } from '../service/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  todoService = inject(TodoService);
  text: string = '';

  public changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  public addTodo():void{
    this.todoService.addTodo(this.text);
    this.text ='';
  }
}
