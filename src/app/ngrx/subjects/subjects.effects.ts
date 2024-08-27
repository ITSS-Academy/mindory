import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, of, map, switchMap } from 'rxjs';

import * as SubjectsActions from './subjects.actions';
import { SubjectsService } from '../../services/subjects/subjects.service';

@Injectable()
export class SubjectEffects {
  constructor(
    private actions$: Actions,
    private subjectsService: SubjectsService,
  ) {}

  getSubjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.getSubjects),
      switchMap(() => {
        return this.subjectsService.getSubject().pipe(
          map((subjects: any) => {
            return SubjectsActions.getSubjectsSuccess({ subjects });
          }),
          catchError((error) => {
            return of(
              SubjectsActions.getSubjectsFailure({ errorMessage: error }),
            );
          }),
        );
      }),
    );
  });
}
