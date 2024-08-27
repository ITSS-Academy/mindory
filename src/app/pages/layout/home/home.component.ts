import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { SharedModule } from '../../../shared/modules/shared.module';
import { FlashcardSetsComponent } from './components/flashcard-sets/flashcard-sets.component';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import * as SubjectActions from '../../../ngrx/subjects/subjects.actions';
import { SubjectState } from '../../../ngrx/subjects/subjects.state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, SharedModule, FlashcardSetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];

  constructor(
    private store: Store<{
      auth: AuthState;
      flashcard: FlashcardState;
      subject: SubjectState;
    }>,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select('subject', 'subjects').subscribe((subjects) => {
        console.log(subjects);
      }),
    );

    this.store.dispatch(SubjectActions.getSubjects());
  }

  ngOnDestroy(): void {}
}
