import { LibraryComponent } from './library.component';
import { Routes } from '@angular/router';

export const LIBRARY_ROUTERS: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [],
  },
];
