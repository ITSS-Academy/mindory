import { Component } from '@angular/core';
import { LessonContentComponent } from './components/lesson-content/lesson-content.component';
import { ViewComponent } from './components/view/view.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [LessonContentComponent, ViewComponent, MatIcon],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export class FlashcardsComponent {}
