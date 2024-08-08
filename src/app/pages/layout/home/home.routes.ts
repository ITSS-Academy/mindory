import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

export const HOME_ROUTERS: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
];
