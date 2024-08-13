import { StudyModesComponent } from './study-modes.component';
import { Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { LearnComponent } from './learn/learn.component';
import { MatchComponent } from './match/match.component';
import { TestComponent } from './test/test.component';
import {MatchPlayComponent} from "./match-play/match-play.component";

export const STUDY_MODES_ROUTERS: Routes = [
  {
    path: '',
    component: StudyModesComponent,
    children: [
      {
        path: '',
        redirectTo: 'flashcards',
        pathMatch: 'full',
      },
      {
        path: 'flashcards',
        component: FlashcardsComponent,
      },
      {
        path: 'learn',
        component: LearnComponent,
      },
      {
        path: 'match',
        component: MatchComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'match-play',
        component: MatchPlayComponent,
      },
    ],
  },
];
