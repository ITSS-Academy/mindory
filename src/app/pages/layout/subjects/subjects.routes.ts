import { SubjectsComponent } from './subjects.component';
import { Routes } from '@angular/router';

export const SUBJECTS_ROUTERS: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    children: [],
  },
];
