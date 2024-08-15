import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';

@Component({
  selector: 'app-flashcard-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './flashcard-card.component.html',
  styleUrl: './flashcard-card.component.scss',
})
export class FlashcardCardComponent {}
