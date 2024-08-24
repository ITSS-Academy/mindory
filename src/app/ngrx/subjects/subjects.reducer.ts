import { createReducer, on } from '@ngrx/store';
import * as SubjectsActions from './subjects.actions';
import { SubjectsState } from './subjects.state';
import { Subject } from '../../models/subjects.model';

export const initialState: SubjectsState = {
  subject: <Subject>{},
  isGettingSubjectSuccessful: false,
  gettingSubjectError: '',

};

export const subjectsReducer = createReducer(
  initialState,
  on(SubjectsActions.getSubjects, (state) => ({
    ...state,
    isGettingSubjectSuccessful: false,
    gettingSubjectError: '',
  })),
  on(SubjectsActions.getSubjectsSuccess, (state, { subjects }) => ({
    ...state,
    subject: subjects,
    isGettingSubjectSuccessful: true,
  })),
  on(SubjectsActions.getSubjectsFailure, (state, { errorMessage }) => ({
    ...state,
    isGettingSubjectSuccessful: false,
    gettingSubjectError: errorMessage,
  })),
);
