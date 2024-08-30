import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardBySubject } from '../../../../../models/flashcard.model';
import { Store } from '@ngrx/store';
import { FlashcardState } from '../../../../../ngrx/flashcard/flashcard.state';
import * as FlashcardActions from '../../../../../ngrx/flashcard/flashcard.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() flashcard!: FlashcardBySubject[];

  constructor(
    public dialog: MatDialog,
    private store: Store<{ flashcard: FlashcardState }>,
    private router: Router,
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  openPreview(): void {
    this.dialog.open(PreviewModalComponent, {
      width: '500px',
      height: '500px',
    });
  }

  navigate(id: string) {
    this.router.navigate(['/flashcard', id]);
  }

  chooseFlashcard(flashcard: FlashcardBySubject): void {
    this.store.dispatch(
      FlashcardActions.storeFlashcardBySubject({ flashcards: flashcard }),
    );
  }

  openPreviewAndChooseFlashcard(event: Event, card: FlashcardBySubject): void {
    event.stopPropagation();
    this.openPreview();
    this.chooseFlashcard(card);
  }
}
