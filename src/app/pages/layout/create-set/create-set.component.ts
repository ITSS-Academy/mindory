import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { SharedModule } from '../../../shared/modules/shared.module';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { Subscription } from 'rxjs';
import { FlashcardDTO, FlashcardModel } from '../../../models/flashcard.model';
import * as FlashCardActions from '../../../ngrx/flashcard/flashcard.actions';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { Store } from '@ngrx/store';
import { SubjectModel } from '../../../models/subject.model';
import { SubjectState } from '../../../ngrx/subjects/subjects.state';
import * as SubjectActions from '../../../ngrx/subjects/subjects.actions';
import { AsyncPipe } from '@angular/common';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-set',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent, AsyncPipe],
  templateUrl: './create-set.component.html',
  styleUrl: './create-set.component.scss',
})
export class CreateSetComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  flashcard!: FlashcardModel;
  listSubjects: SubjectModel[] = [];
  idToke!: string;
  isGettingSubjects$ = this.store.select(
    'subject',
    'isGettingSubjectSuccessful',
  );

  flashcardDefault: FlashcardModel = {
    id: '',
    title: '',
    description: '',
    totalCards: 0,
    isPublic: false,
    createdAt: new Date(),
    subject: {
      uid: '64bf69b7-0b0f-4f37-90a5-6eea3bf9466f',
      name: 'Social Science',
    },
    cards: [
      {
        id: '',
        term: '',
        definition: '',
      },
    ],
    authorId: {
      uid: '',
      email: '',
      fullName: '',
      photoUrl: '',
    },
  };

  settings = {
    title: '',
    description: '',
    isPublic: false,
    subject: {
      uid: '64bf69b7-0b0f-4f37-90a5-6eea3bf9466f',
      name: 'Social Science',
    },
  };

  constructor(
    private store: Store<{
      auth: AuthState;
      flashcard: FlashcardState;
      subject: SubjectState;
    }>,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select('flashcard', 'flashcard').subscribe((flashcard) => {
        this.flashcard = this.deepClone(flashcard);
      }),
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        this.idToke = idToken as string;
      }),
      this.store.select('subject', 'subjects').subscribe((subjects) => {
        this.listSubjects = subjects as SubjectModel[];
      }),
      this.store
        .select('flashcard', 'isCreateFlashcardSuccess')
        .subscribe((res) => {
          if (res) {
            this.router.navigate(['/home']);
            this.store.dispatch(FlashCardActions.clearState());
          }
        }),
    );
    this.store.dispatch(
      FlashCardActions.storeDefaultFlashcard({
        flashcard: this.flashcardDefault,
      }),
    );
    this.store.dispatch(SubjectActions.getSubjects());
  }

  addCard() {
    this.store.dispatch(FlashCardActions.addNewCard());
  }

  updateCardByIndex(index: number, card: any) {
    this.store.dispatch(FlashCardActions.updateCardByIndex({ index, card }));
  }

  updateSettings() {
    this.store.dispatch(
      FlashCardActions.updateFlashcard({ setting: { ...this.settings } }),
    );
  }

  convertToFlashcardDTO(flashcard: FlashcardModel): FlashcardDTO {
    const cardsWithoutId = flashcard.cards.map(({ id, ...rest }) => rest);
    return {
      flashcard: {
        title: flashcard.title,
        description: flashcard.description,
        isPublic: flashcard.isPublic,
        subject: {
          uid: flashcard.subject.uid,
          name: flashcard.subject.name,
        },
        cards: cardsWithoutId,
      },
    };
  }

  createFlashcard() {
    const flashcardDTO = this.convertToFlashcardDTO(this.flashcard);
    this.store.dispatch(
      FlashCardActions.createFlashcard({
        idToken: this.idToke,
        flashcard: flashcardDTO,
      }),
    );
  }

  onSubjectChange(event: any) {
    this.settings.subject = { ...this.listSubjects[event.value] };
    this.updateSettings();
  }

  handleVisibilityChange(event: MatRadioChange): void {
    if (event.value === 'public') {
      this.settings.isPublic = true;
    }
    if (event.value === 'private') {
      this.settings.isPublic = false;
    }
    this.updateSettings();
  }

  deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
