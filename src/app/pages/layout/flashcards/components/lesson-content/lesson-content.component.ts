import {AfterViewInit, Component, Input, input} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-lesson-content',
  standalone: true,
  templateUrl: './lesson-content.component.html',
  imports: [MatIcon],
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements AfterViewInit {
  @Input()
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
