import { CommonModule } from "@angular/common";
import { Component, Input, computed, inject } from "@angular/core";
import { TodoService } from "../service/todos.service";
import { FilterEnum } from "../types/filter.enum";
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector:'app-todos-main',
  templateUrl:'./main.component.html',
  standalone:true,
  imports:[CommonModule,TodoComponent]
})

export class MainComponent {
  todoService = inject(TodoService);
  editingId: string |null =null;



  visiableTodo =  computed(()=> {
    const todos = this.todoService.todoSignal();
    const filterSignal = this.todoService.filterSig();

    if(filterSignal === FilterEnum.active){
      return todos.filter(f => !f.isCompleted);
    }else if (filterSignal === FilterEnum.completed){
      return todos.filter(f => f.isCompleted);
    }
    return todos;
  })

  setEditingId(id:any | null):void{
    this.editingId=  id;

  }
}
