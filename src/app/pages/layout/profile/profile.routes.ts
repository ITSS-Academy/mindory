import { ProfileComponent } from './profile.component';
import { Routes } from '@angular/router';

export const PROFILE_ROUTERS: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [],
  },
];
