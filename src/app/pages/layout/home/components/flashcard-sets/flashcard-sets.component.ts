import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import {
  CdkFixedSizeVirtualScroll,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { SubjectByUid } from '../../../../../models/subject.model';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-sets',
  standalone: true,
  imports: [
    MaterialModule,
    SharedModule,
    CdkFixedSizeVirtualScroll,
    ScrollingModule,
    NgOptimizedImage,
  ],
  templateUrl: './flashcard-sets.component.html',
  styleUrl: './flashcard-sets.component.scss',
})
export class FlashcardSetsComponent {
  @Input() subject!: SubjectByUid;

  constructor(private router: Router) {}

  flashcardDetail(id: string) {
    this.router.navigate([`/flashcard/${id}`]);
  }
}
