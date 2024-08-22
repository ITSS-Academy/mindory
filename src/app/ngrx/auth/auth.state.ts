export interface AuthState {
  idToken: string;

  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  loginErrorMessage: string;

  isLogoutLoading: boolean;
  isLogoutSuccess: boolean;
  logoutErrorMessage: string;
}
