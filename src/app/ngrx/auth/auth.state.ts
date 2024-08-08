export interface AuthState {
  idToken: string;
  isLoading: boolean;
  isSuccessful: boolean;
  isLogoutLoading: boolean;
  isLogoutSuccess: boolean;
  errorMessage: string;
}
