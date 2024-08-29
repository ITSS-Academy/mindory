import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../../../ngrx/flashcard/flashcard.state';
import { Subscription } from 'rxjs';
import { FlashcardModel } from '../../../../../models/flashcard.model';
import * as FlashcardActions from '../../../../../ngrx/flashcard/flashcard.actions';

@Component({
  selector: 'app-flashcard-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './flashcard-card.component.html',
  styleUrl: './flashcard-card.component.scss',
})
export class FlashcardCardComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  flashcard!: FlashcardModel[];

  constructor(
    private store: Store<{ auth: AuthState; flashcard: FlashcardState }>,
  ) {
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.store.dispatch(FlashcardActions.getAllFlashcard({ idToken }));
        }
      }),
      this.store.select('flashcard', 'flashcards').subscribe((flashcards) => {
        this.flashcard = flashcards as FlashcardModel[];
      }),
    );
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
