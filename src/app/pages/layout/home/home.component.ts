import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { SharedModule } from '../../../shared/modules/shared.module';
import { FlashcardSetsComponent } from './components/flashcard-sets/flashcard-sets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, SharedModule, FlashcardSetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
