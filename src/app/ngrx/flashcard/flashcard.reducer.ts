import { FlashcardState } from './flashcard.state';
import { FlashcardModel } from '../../models/flashcard.model';
import { createReducer, on } from '@ngrx/store';
import * as FlashcardActions from './flashcard.actions';

export const initialState: FlashcardState = {
  flashcard: <FlashcardModel>{},
  isGetFlashcardSuccess: false,
  getFlashcardError: '',

  flashcards: [],
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
  on(FlashcardActions.getFlashcardBySubject, (state, action) => {
    console.log(action.type);
    return {
      ...state,
    };
  }),
  on(
    FlashcardActions.getFlashcardBySubjectSuccess,
    (state, { flashcards, type }) => {
      console.log(type);
      return {
        ...state,
        isGetFlashcardSuccess: true,
        flashcards: flashcards,
      };
    },
  ),
  on(
    FlashcardActions.getFlashcardBySubjectFailure,
    (state, { errorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        isGetFlashcardSuccess: false,
        getFlashcardError: errorMessage,
      };
    },
  ),
);
