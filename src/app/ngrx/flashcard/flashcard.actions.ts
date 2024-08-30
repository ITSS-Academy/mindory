import { createAction, props } from '@ngrx/store';
import {
  FlashcardBySubject,
  FlashcardDTO,
  FlashcardModel,
} from '../../models/flashcard.model';
import { CardModel } from '../../models/card.model';

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
  props<{ subjectId: string }>(),
);

export const getFlashcardBySubjectSuccess = createAction(
  '[Flashcard] Get Flashcard By Subject Success',
  props<{ flashcards: FlashcardModel[] }>(),
);

export const getFlashcardBySubjectFailure = createAction(
  '[Flashcard] Get Flashcard By Subject Failure',
  props<{ errorMessage: string }>(),
);

export const createFlashcard = createAction(
  '[Flashcard] Create Flashcard',
  props<{ idToken: string; flashcard: FlashcardDTO }>(),
);

export const createFlashcardSuccess = createAction(
  '[Flashcard] Create Flashcard Success',
);

export const createFlashcardFailure = createAction(
  '[Flashcard] Create Flashcard Failure',
  props<{ errorMessage: string }>(),
);

export const storeDefaultFlashcard = createAction(
  '[Flashcard] Store Default Flashcard',
  props<{ flashcard: FlashcardModel }>(),
);

export const addNewCard = createAction('[Flashcard] Add New Card');

export const updateCardByIndex = createAction(
  '[Flashcard] Update Card By Index',
  props<{ index: number; card: CardModel }>(),
);

export const deleteCardByIndex = createAction(
  '[Flashcard] Delete Card By Index',
  props<{ index: number }>(),
);

export const updateFlashcard = createAction(
  '[Flashcard] Update Flashcard',
  props<{ setting: any }>(),
);

export const getAllFlashcard = createAction(
  '[Flashcard] Get All Flashcard',
  props<{ idToken: string }>(),
);

export const getAllFlashcardSuccess = createAction(
  '[Flashcard] Get All Flashcard Success',
  props<{ flashcards: FlashcardModel[] }>(),
);

export const getAllFlashcardFailure = createAction(
  '[Flashcard] Get All Flashcard Failure',
  props<{ errorMessage: string }>(),
);

export const storeFlashcardBySubject = createAction(
  '[Flashcard] Store Flashcard By Subject',
  props<{ flashcards: FlashcardBySubject }>(),
);

export const clearState = createAction('[Flashcard] Clear State');
