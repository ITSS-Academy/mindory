import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CardModel } from '../../../../../models/card.model';

@Component({
  selector: 'app-lesson-content',
  standalone: true,
  templateUrl: './lesson-content.component.html',
  imports: [MatIcon],
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements AfterViewInit {
  @Input() cards!: CardModel[];
  @Input() page: number = 0;
  @Output() pageChange = new EventEmitter<number>();

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

  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.pageChange.emit(this.page);
    }
  }

  nextPage() {
    if (this.page < this.cards.length - 1) {
      this.page++;
      this.pageChange.emit(this.page);
    }
  }
}
