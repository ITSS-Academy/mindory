import { createAction, props } from '@ngrx/store';
import { SubjectModel } from '../../models/subject.model';

export const getSubjects = createAction(
  '[Subjects] Get Subjects',
  props<{ idToken: string }>(),
);

export const getSubjectsSuccess = createAction(
  '[Subjects] Get Subjects Success',
  props<{ subjects: SubjectModel[] }>(),
);

export const getSubjectsFailure = createAction(
  '[Subjects] Get Subjects Failure',
  props<{ errorMessage: string }>(),
);
