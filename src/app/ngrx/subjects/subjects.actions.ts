import { createAction, props } from '@ngrx/store';
import { Subject } from '../../models/subjects.model';

export const getSubjects = createAction(
  '[Subjects] Get Subjects',
  props<{ idToken: string, id: string }>(),
);

export const getSubjectsSuccess = createAction(
  '[Subjects] Get Subjects Success',
  props<{ subjects: Subject}>(),
);

export const getSubjectsFailure = createAction(
  '[Subjects] Get Subjects Failure',
  props<{ errorMessage: string }>(),
);

