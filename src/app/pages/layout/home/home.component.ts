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
import { SubjectByUid, SubjectModel } from '../../../models/subject.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, SharedModule, FlashcardSetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  listSubjects: SubjectByUid[] = [];
  isGettingSubjects$ = this.store.select(
    'subject',
    'isGettingSubjectSuccessful',
  );

  socialScience!: SubjectByUid;
  business!: SubjectByUid;
  economics!: SubjectByUid;
  humanGeography!: SubjectByUid;

  idToken!: string;

  constructor(
    private store: Store<{
      auth: AuthState;
      flashcard: FlashcardState;
      subject: SubjectState;
    }>,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.idToken = idToken as string;
        }
      }),
      this.store.select('subject', 'subjects').subscribe((subjects) => {
        if (subjects) {
          this.listSubjects = subjects as SubjectByUid[];
          if (this.listSubjects.length > 0) {
            this.socialScience = this.listSubjects[0];
            this.business = this.listSubjects[1];
            this.economics = this.listSubjects[2];
            this.humanGeography = this.listSubjects[5];
          }
        }
      }),
    );

    this.store.dispatch(SubjectActions.getSubjects());
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
