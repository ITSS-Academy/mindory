import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, of, map, switchMap } from 'rxjs';

import * as FlashcardActions from './flashcard.actions';
import { FlashcardService } from '../../services/flashcard/flashcard.service';

@Injectable()
export class FlashcardEffects {
  constructor(
    private actions$: Actions,
    private flashcardService: FlashcardService,
  ) {}

  getFlashcard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlashcardActions.getFlashcard),
      switchMap((action) => {
        return this.flashcardService.getFlashcardById(
          action.idToken,
          action.flashcardId,
        );
      }),
      map((flashcard: any) => {
        return FlashcardActions.getFlashcardSuccess({ flashcard });
      }),
      catchError((error) => {
        return of(
          FlashcardActions.getFlashcardFailure({ errorMessage: error }),
        );
      }),
    );
  });
}
