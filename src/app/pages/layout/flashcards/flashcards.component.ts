import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';
import { ViewComponent } from './components/view/view.component';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { Store } from '@ngrx/store';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashcardModel } from '../../../models/flashcard.model';
import { CardModel } from '../../../models/card.model';
import { ProfileState } from '../../../ngrx/profile/profile.state';
import { Profile } from '../../../models/profile.model';
import { AsyncPipe } from '@angular/common';
import { LocalTimePipe } from '../../../shared/pipes/local-time.pipe';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [
    LessonContentComponent,
    ViewComponent,
    MatIcon,
    AsyncPipe,
    LocalTimePipe,
  ],
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss'],
})
export class FlashcardsComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  flashcard!: FlashcardModel;
  cards: CardModel[] = [];
  profile!: Profile;
  flashcardId!: string;

  regime = [
    {
      value: 'Flashcard',
      img: 'assets/icon/flashcard.svg',
    },
    {
      value: 'Learn',
      img: 'assets/icon/learn.svg',
    },
    {
      value: 'Match',
      img: 'assets/icon/match.svg',
    },
    {
      value: 'Test',
      img: 'assets/icon/test.svg',
    },
  ];

  isGetFlashcardSuccess$ = this.store.select(
    'flashcard',
    'isGetFlashcardSuccess',
  );

  constructor(
    private store: Store<{
      auth: AuthState;
      flashcard: FlashcardState;
      profile: ProfileState;
    }>,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.flashcardId = this.activeRoute.snapshot.params['id'];
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.store.dispatch(
            FlashcardActions.getFlashcard({
              idToken: idToken,
              flashcardId: this.flashcardId,
            }),
          );
        }
      }),
      this.store.select('flashcard', 'flashcard').subscribe((flashcard) => {
        this.flashcard = flashcard as FlashcardModel;
        this.cards = flashcard.cards as CardModel[];
        this.profile = flashcard.authorId as Profile;
        console.log(this.flashcard);
      }),
    );
  }

  navigate(value: string): void {
    const name = value.toLowerCase();
    this.router.navigate([`/study-modes/${this.flashcardId}/${name}`]);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
