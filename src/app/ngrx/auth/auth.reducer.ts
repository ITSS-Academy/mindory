import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  idToken: '',
  isLoading: false,
  isSuccessful: false,
  isLogoutLoading: false,
  isLogoutSuccess: false,
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoading: true,
      isSuccessful: false,
      errorMessage: '',
    };
  }),

  on(AuthActions.loginSuccess, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoading: false,
      isSuccessful: true,
      errorMessage: '',
    };
  }),

  on(AuthActions.loginFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      isSuccessful: false,
      errorMessage,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLogoutLoading: true,
      isLogoutSuccess: false,
      errorMessage: '',
    };
  }),

  on(AuthActions.logoutSuccess, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      idToken: '',
      isLogoutLoading: false,
      isLogoutSuccess: true,
      errorMessage: '',
    };
  }),

  on(AuthActions.logoutFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isLogoutLoading: false,
      isLogoutSuccess: false,
      errorMessage,
    };
  }),

  on(AuthActions.storeIdToken, (state, { idToken, type }) => {
    console.log(type);
    return {
      ...state,
      idToken,
    };
  }),
);
