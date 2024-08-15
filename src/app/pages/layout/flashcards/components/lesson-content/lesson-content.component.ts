import { Component, AfterViewInit, Input } from '@angular/core';
import {PaginationControlComponent} from "./pagination-control/pagination-control.component";

@Component({
  selector: 'app-lesson-content',
  standalone: true,
  templateUrl: './lesson-content.component.html',
  imports: [
    PaginationControlComponent
  ],
  styleUrls: ['./lesson-content.component.scss']
})
export class LessonContentComponent implements AfterViewInit {

  @Input() activeIndex = 0;
  private cards!: NodeListOf<HTMLElement>;

  constructor() { }

  ngAfterViewInit() {
    this.cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    this.cards.forEach(cardElement => {
      cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('clicked');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        this.cards.forEach(cardElement => {
          cardElement.classList.toggle('clicked');
        });
      }
    });
  }

  onNext() {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
    this.updateCard();
  }

  private updateCard() {
    this.cards.forEach((cardElement, index) => {
      cardElement.style.display = index === this.activeIndex ? 'block' : 'none';
    });
  }
}
