import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, of, map, switchMap } from 'rxjs';

import * as ProfileActions from './profile.actions';
import { ProfileService } from '../../services/profile/profile.service';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {}

  createProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.createProfile),
      switchMap((action) => {
        return this.profileService.createProfile(action.idToken);
      }),
      map(() => {
        return ProfileActions.createProfileSuccess();
      }),
      catchError((error) => {
        return of(ProfileActions.createProfileFailure({ errorMessage: error }));
      }),
    );
  });

  getProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getProfile),
      switchMap((action) => {
        return this.profileService.getProfile(action.idToken);
      }),
      map((profile: any) => {
        return ProfileActions.getProfileSuccess({ profile });
      }),
      catchError((error) => {
        return of(ProfileActions.getProfileFailure({ errorMessage: error }));
      }),
    );
  });
}
