import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  idToken: '',
  isLoginLoading: false,
  isLoginSuccess: false,
  loginErrorMessage: '',
  isLogoutLoading: false,
  isLogoutSuccess: false,
  logoutErrorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoginLoading: true,
      isLoginSuccess: false,
    };
  }),

  on(AuthActions.loginSuccess, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoginLoading: false,
      isLoginSuccess: true,
    };
  }),

  on(AuthActions.loginFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isLoginLoading: false,
      isLoginSuccess: false,
      loginErrorMessage: errorMessage,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      isLogoutLoading: true,
      isLogoutSuccess: false,
    };
  }),

  on(AuthActions.logoutSuccess, (state, action) => {
    return {
      ...state,
      idToken: '',
      isLogoutLoading: false,
      isLogoutSuccess: true,
    };
  }),

  on(AuthActions.logoutFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isLogoutLoading: false,
      isLogoutSuccess: false,
      logoutErrorMessage: errorMessage,
    };
  }),

  on(AuthActions.storeIdToken, (state, { idToken, type }) => {
    return {
      ...state,
      idToken,
    };
  }),
);
