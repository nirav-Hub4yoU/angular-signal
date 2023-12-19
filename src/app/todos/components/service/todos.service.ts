import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.inteface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSignal = signal<TodoInterface[]>([]);
  filterSig: WritableSignal<FilterEnum> = signal<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(25),
      text: text,
      isCompleted: false,
    };

    this.todoSignal.update((value) => [...value, newTodo]);
  }

  channgeFilter(filterName:FilterEnum):void{
    this.filterSig.set(filterName);
  }
}
