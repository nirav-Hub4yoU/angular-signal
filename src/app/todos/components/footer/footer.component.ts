import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../service/todos.service';
import { FilterEnum } from '../types/filter.enum';
import { CommonModule } from '@angular/common';
import { compileClassDebugInfo } from '@angular/compiler';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  todoService = inject(TodoService);
  filterEnum = FilterEnum;
  filter = this.todoService.filterSig;
  activeCount = computed(() => {
    return this.todoService.todoSignal().filter((f) => !f.isCompleted).length;
  });
  noToDoClass = computed(() => {
    return this.todoService.todoSignal().length === 0;
  });
  itemsLeftText = computed(
    () => ` item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  changeFilter(event: Event, state: FilterEnum): void {
    event.preventDefault();
    this.todoService.channgeFilter(state);
  }
}
