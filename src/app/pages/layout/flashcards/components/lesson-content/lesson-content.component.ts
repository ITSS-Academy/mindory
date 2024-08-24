import { AfterViewInit, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CardModel } from '../../../../../models/card.model';

@Component({
  selector: 'gitapp-lesson-content',
  standalone: true,
  templateUrl: './lesson-content.component.html',
  imports: [MatIcon],
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements AfterViewInit {
  @Input() cards!: CardModel[];

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
