import { createReducer, on } from '@ngrx/store';
import * as StudyModeActions from './study-mode.actions';
import { StudyModeState } from './study-mode.state';

export const initialState: StudyModeState = {
  idFlashcard: '',
};

export const studyModeReducer = createReducer(
  initialState,
  on(StudyModeActions.storeIdFlashcard, (state, { id }) => ({
    ...state,
    idFlashcard: id,
  })),
);
