import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CardModel } from '../../../../../models/card.model';
import {
  FlashcardBySubject,
  FlashcardModel,
} from '../../../../../models/flashcard.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  flashcard!: FlashcardBySubject[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  ngOnDestroy() {}

  openPreview(): void {
    this.dialog.open(PreviewModalComponent, {
      width: '500px',
    });
  }
}
