import { createAction, props } from '@ngrx/store';

export const storeIdFlashcard = createAction(
  '[StudyMode] Store Id Flashcard',
  props<{ id: string }>(),
);
