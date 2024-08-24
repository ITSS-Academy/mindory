import { createAction, props } from '@ngrx/store';
import { FlashcardModel } from '../../models/flashcard.model';

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
