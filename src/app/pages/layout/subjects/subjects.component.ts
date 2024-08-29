import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatCardActions } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { SubjectState } from '../../../ngrx/subjects/subjects.state';
import * as SubjectActions from '../../../ngrx/subjects/subjects.actions';
import { SubjectByUid, SubjectModel } from '../../../models/subject.model';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FlashcardBySubject } from '../../../models/flashcard.model';
import { SharedModule } from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CardComponent,
    MatAnchor,
    MatButton,
    MatCardActions,
    MatChipsModule,
    AsyncPipe,
    SharedModule,
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  listSubjects: SubjectByUid[] = [];
  isGettingSubjectsSuccess$ = this.store.select(
    'subject',
    'isGettingSubjectSuccessful',
  );
  flashcard: FlashcardBySubject[] = [];

  currentSubject = 0;

  constructor(private store: Store<{ subject: SubjectState }>) {}

  ngOnInit() {
    this.subscription.push(
      this.store.select('subject', 'subjects').subscribe((subjects) => {
        this.listSubjects = subjects as SubjectByUid[];
        this.flashcard = this.listSubjects[this.currentSubject].flashcards;
      }),
    );

    this.store.dispatch(SubjectActions.getSubjects());
  }

  onCategoryChange(event: any): void {
    this.currentSubject = event.value;
    this.flashcard = this.listSubjects[this.currentSubject].flashcards;
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
