import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  { path: 'home', component: TodosComponent, pathMatch: 'full' },
  {
    path:'**',
    component: TodosComponent,
  }
];
