import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import { Store } from '@ngrx/store';
import { FlashcardState } from '../../../../../ngrx/flashcard/flashcard.state';
import { Subscription } from 'rxjs';
import { FlashcardBySubject } from '../../../../../models/flashcard.model';

@Component({
  selector: 'app-preview-modal',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './preview-modal.component.html',
  styleUrl: './preview-modal.component.scss',
})
export class PreviewModalComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  flashcards!: FlashcardBySubject;

  constructor(
    public dialogRef: MatDialogRef<PreviewModalComponent>,
    private store: Store<{ flashcard: FlashcardState }>,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.store.select('flashcard', 'flashcardBySubject').subscribe((data) => {
        this.flashcards = data as FlashcardBySubject;
      }),
    );
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
