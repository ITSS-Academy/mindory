import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatCardActions } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { SubjectState } from '../../../ngrx/subjects/subjects.state';
import * as SubjectActions from '../../../ngrx/subjects/subjects.actions';
import { SubjectModel } from '../../../models/subject.model';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  listSubjects: SubjectModel[] = [];
  isGettingSubjectsSuccess$ = this.store.select(
    'subject',
    'isGettingSubjectSuccessful',
  );

  constructor(private store: Store<{ subject: SubjectState }>) {
    this.subscription.push(
      this.store.select('subject', 'subjects').subscribe((subjects) => {
        this.listSubjects = subjects;
      }),
    );
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
