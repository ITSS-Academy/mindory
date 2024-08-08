import { CreateSetComponent } from './create-set.component';
import { Routes } from '@angular/router';

export const CREATE_SET_ROUTERS: Routes = [
  {
    path: '',
    component: CreateSetComponent,
    children: [],
  },
];
