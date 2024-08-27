import { createAction, props } from '@ngrx/store';
import { FlashcardModel } from '../../models/flashcard.model';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

export const getFlashcard = createAction(
  '[Flashcard] Get Flashcard',
  props<{ idToken: string; flashcardId: string }>(),
);
export const getFlashcardSuccess = createAction(
  '[Flashcard] Get Flashcard Success',
  props<{ flashcard: FlashcardModel }>(),
);
export const getFlashcardFailure = createAction(
  '[Flashcard] Get Flashcard Failure',
  props<{ errorMessage: string }>(),
);

export const getFlashcardBySubject = createAction(
  '[Flashcard] Get Flashcard By Subject',
  props<{ idToken: string; subjectId: string }>(),
);

export const getFlashcardBySubjectSuccess = createAction(
  '[Flashcard] Get Flashcard By Subject Success',
  props<{ flashcards: FlashcardModel[] }>(),
);

export const getFlashcardBySubjectFailure = createAction(
  '[Flashcard] Get Flashcard By Subject Failure',
  props<{ errorMessage: string }>(),
);
