import { FlashcardState } from './flashcard.state';
import {
  FlashcardBySubject,
  FlashcardModel,
} from '../../models/flashcard.model';
import { createReducer, on } from '@ngrx/store';
import * as FlashcardActions from './flashcard.actions';
import { CardModel } from '../../models/card.model';

export const initialState: FlashcardState = {
  flashcard: <FlashcardModel>{},
  isGetFlashcardSuccess: false,
  getFlashcardError: '',

  flashcards: [],
  isGetFlashcardBySubjectSuccess: false,
  getFlashcardBySubjectError: '',

  isCreateFlashcardSuccess: false,
  createFlashcardError: '',

  isGetAllFlashcardSuccess: false,
  getAllFlashcardError: '',

  flashcardBySubject: <FlashcardBySubject>{},
};

export const flashcardReducer = createReducer(
  initialState,
  on(FlashcardActions.getFlashcard, (state, action) => {
    console.log(action.flashcardId);
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
        isGetFlashcardBySubjectSuccess: true,
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
        isGetFlashcardBySubjectSuccess: false,
        getFlashcardBySubjectError: errorMessage,
      };
    },
  ),

  on(FlashcardActions.storeDefaultFlashcard, (state, { flashcard }) => {
    return {
      ...state,
      flashcard: flashcard,
    };
  }),
  on(FlashcardActions.addNewCard, (state) => {
    return {
      ...state,
      flashcard: {
        ...state.flashcard,
        cards: [
          ...state.flashcard.cards,
          {
            id: '',
            term: '',
            definition: '',
          },
        ],
      },
    };
  }),
  on(FlashcardActions.updateCardByIndex, (state, { index, card }) => {
    const updatedCards = [...state.flashcard.cards];
    updatedCards[index] = card;
    return {
      ...state,
      flashcard: {
        ...state.flashcard,
        cards: updatedCards,
      },
    };
  }),
  on(FlashcardActions.deleteCardByIndex, (state, { index }) => {
    const updatedCards = state.flashcard.cards.filter(
      (card, cardIndex) => cardIndex !== index,
    );
    return {
      ...state,
      flashcard: {
        ...state.flashcard,
        cards: updatedCards,
      },
    };
  }),
  on(FlashcardActions.createFlashcard, (state, { type }) => {
    console.log(type);
    return {
      ...state,
    };
  }),
  on(FlashcardActions.createFlashcardSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isCreateFlashcardSuccess: true,
    };
  }),
  on(
    FlashcardActions.createFlashcardFailure,
    (state, { errorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        createFlashcardError: errorMessage,
      };
    },
  ),
  on(FlashcardActions.updateFlashcard, (state, { type, setting }) => {
    console.log(type);

    return {
      ...state,
      flashcard: {
        ...state.flashcard,
        title: setting.title,
        description: setting.description,
        isPublic: setting.isPublic,
        subject: setting.subject,
      },
    };
  }),
  on(FlashcardActions.clearState, (state) => {
    return {
      ...state,
      flashcard: <FlashcardModel>{},
      isGetFlashcardSuccess: false,
      getFlashcardError: '',

      flashcards: [],
      isGetFlashcardBySubjectSuccess: false,
      getFlashcardBySubjectError: '',

      isCreateFlashcardSuccess: false,
      createFlashcardError: '',
    };
  }),
  on(FlashcardActions.getAllFlashcard, (state, { type }) => {
    console.log(type);
    return {
      ...state,
    };
  }),
  on(FlashcardActions.getAllFlashcardSuccess, (state, { flashcards, type }) => {
    console.log(type);
    return {
      ...state,
      isGetAllFlashcardSuccess: true,
      flashcards: flashcards,
    };
  }),
  on(
    FlashcardActions.getAllFlashcardFailure,
    (state, { errorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        isGetAllFlashcardSuccess: false,
        getAllFlashcardError: errorMessage,
      };
    },
  ),
  on(FlashcardActions.storeFlashcardBySubject, (state, { flashcards }) => {
    return {
      ...state,
      flashcardBySubject: flashcards,
    };
  }),
);
