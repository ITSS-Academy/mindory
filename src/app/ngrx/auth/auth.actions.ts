import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction('[Auth] Login Success');

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ errorMessage: string }>(),
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ errorMessage: string }>(),
);

export const storeIdToken = createAction(
  '[Auth] Store ID Token',
  props<{ idToken: string }>(),
);
