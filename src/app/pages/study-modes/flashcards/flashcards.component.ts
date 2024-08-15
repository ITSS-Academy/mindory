import { Component } from '@angular/core';
import {
  CdkFixedSizeVirtualScroll,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { MaterialModule } from '../../../shared/modules/material.module';
import { SharedModule } from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [
    MaterialModule,
    SharedModule,
    CdkFixedSizeVirtualScroll,
    ScrollingModule,
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export class FlashcardsComponent {}
