import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';
import { ViewComponent } from './components/view/view.component';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { Store } from '@ngrx/store';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [LessonContentComponent, ViewComponent, MatIcon],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export class FlashcardsComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];

  constructor(
    private store: Store<{ auth: AuthState; flashcard: FlashcardState }>,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const flashcardId = this.activeRoute.snapshot.params['id'];
    console.log(flashcardId);
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.store.dispatch(
            FlashcardActions.getFlashcard({
              idToken: idToken,
              flashcardId: flashcardId,
            }),
          );
        }
      }),
      this.store.select('flashcard', 'flashcard').subscribe((flashcard) => {
        console.log(flashcard);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
