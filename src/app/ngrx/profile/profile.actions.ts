import { createAction, props } from '@ngrx/store';
import { Profile } from '../../models/profile.model';

export const getProfile = createAction(
  '[Profile] Get Profile',
  props<{ idToken: string }>(),
);

export const getProfileSuccess = createAction(
  '[Profile] Get Profile Success',
  props<{ profile: Profile }>(),
);

export const getProfileFailure = createAction(
  '[Profile] Get Profile Failure',
  props<{ errorMessage: string }>(),
);

export const createProfile = createAction(
  '[Profile] Create Profile',
  props<{ idToken: string }>(),
);

export const createProfileSuccess = createAction(
  '[Profile] Create Profile Success',
);

export const createProfileFailure = createAction(
  '[Profile] Create Profile Failure',
  props<{ errorMessage: string }>(),
);

export const clearState = createAction('[Profile] Clear State');
