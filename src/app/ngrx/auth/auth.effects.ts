import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, of, map, switchMap } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() => {
        return this.authService.loginWithGoogle();
      }),
      map(() => {
        return AuthActions.loginSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.loginFailure({ errorMessage: error }));
      }),
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout();
      }),
      map(() => {
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => {
        return of(AuthActions.logoutFailure({ errorMessage: error }));
      }),
    );
  });
}
