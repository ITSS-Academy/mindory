import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTERS: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.routes').then((m) => m.HOME_ROUTERS),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('./library/library.routes').then((m) => m.LIBRARY_ROUTERS),
      },
      {
        path: 'subjects',
        loadChildren: () =>
          import('./subjects/subjects.routes').then((m) => m.SUBJECTS_ROUTERS),
      },
      {
        path: 'flashcard/:id',
        loadChildren: () =>
          import('./flashcards/flashcards.routes').then(
            (m) => m.FLASHCARDS_ROUTERS,
          ),
      },
      {
        path: 'create-set',
        loadChildren: () =>
          import('./create-set/create-set.routes').then(
            (m) => m.CREATE_SET_ROUTERS,
          ),
      },
    ],
  },
];
