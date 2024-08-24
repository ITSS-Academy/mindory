import { createReducer, on } from '@ngrx/store';
import * as SubjectsActions from './subjects.actions';
import { SubjectState } from './subjects.state';

export const initialState: SubjectState = {
  subjects: [],
  isGettingSubjectSuccessful: false,
  gettingSubjectError: '',
};

export const subjectReducer = createReducer(
  initialState,
  on(SubjectsActions.getSubjects, (state) => ({
    ...state,
    isGettingSubjectSuccessful: false,
  })),
  on(SubjectsActions.getSubjectsSuccess, (state, { subjects }) => ({
    ...state,
    subjects: subjects,
    isGettingSubjectSuccessful: true,
  })),
  on(SubjectsActions.getSubjectsFailure, (state, { errorMessage }) => ({
    ...state,
    isGettingSubjectSuccessful: false,
    gettingSubjectError: errorMessage,
  })),
);
