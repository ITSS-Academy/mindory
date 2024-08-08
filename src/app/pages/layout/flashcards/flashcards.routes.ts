import { FlashcardsComponent } from './flashcards.component';
import { Routes } from '@angular/router';

export const FLASHCARDS_ROUTERS: Routes = [
  {
    path: '',
    component: FlashcardsComponent,
    children: [],
  },
];
