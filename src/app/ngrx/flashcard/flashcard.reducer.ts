import { FlashcardState } from './flashcard.state';
import { FlashcardModel } from '../../models/flashcard.model';
import { createReducer, on } from '@ngrx/store';
import * as FlashcardActions from './flashcard.actions';

export const initialState: FlashcardState = {
  flashcard: <FlashcardModel>{},
  isGetFlashcardSuccess: false,
  getFlashcardError: '',
};

export const flashcardReducer = createReducer(
  initialState,
  on(FlashcardActions.getFlashcard, (state, action) => {
    console.log(action.type);
    return {
      ...state,
    };
  }),
  on(FlashcardActions.getFlashcardSuccess, (state, { flashcard, type }) => {
    console.log(type);
    return {
      ...state,
      isGetFlashcardSuccess: true,
      flashcard: flashcard,
    };
  }),
  on(FlashcardActions.getFlashcardFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isGetFlashcardSuccess: false,
      getFlashcardError: errorMessage,
    };
  }),
);
