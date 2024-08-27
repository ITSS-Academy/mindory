import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { StudyModeState } from '../../../ngrx/study-mode/study-mode.state';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export class FlashcardsComponent implements AfterViewInit, OnInit, OnDestroy {
  subscription: Subscription[] = [];
  idFlashcard!: string;

  constructor(private store: Store<{ studyMode: StudyModeState }>) {
    this.subscription.push(
      this.store.select('studyMode', 'idFlashcard').subscribe((idFlashcard) => {
        this.idFlashcard = idFlashcard;
      }),
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    cards.forEach((cardElement) => {
      cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('clicked');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        cards.forEach((cardElement) => {
          cardElement.classList.toggle('clicked');
        });
      }
    });
  }
}
