import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lesson-content',
  standalone: true,
  imports: [],
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})
export class LessonContentComponent implements AfterViewInit {

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
}
