// lesson-content.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { PaginationControlComponent } from "./pagination-control/pagination-control.component";

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
  currentPage: number = 1;
  currentIndex: number = 0;
  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  b = ["ANH","EM","CHỊ","BẠN","MẸ","BỐ","ÔNG","BÀ","CHÚ","CÔ","ANH","EM","CHỊ","BẠN","MẸ","BỐ","ÔNG","BÀ","CHÚ","CÔ"];

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    cards.forEach(cardElement => {
      cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('clicked');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        cards.forEach(cardElement => {
          cardElement.classList.toggle('clicked');
        });
      }
    });

    this.updateCardContent();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.currentIndex = (page - 1) % this.a.length; // Tính toán chỉ số hiện tại
    this.updateCardContent();
  }

  updateCardContent() {
    if(this.a.length<this.b.length || this.a.length>this.b.length){
      alert("Số lượng từ vựng không khớp nhau");
      return
    }
    const theFormElement = document.querySelector('.theform p') as HTMLElement;
    const theBackElement = document.querySelector('.theback p') as HTMLElement;

    if (theFormElement && theBackElement) {
      theFormElement.textContent = this.a[this.currentIndex].toString();
      theBackElement.textContent = this.b[this.currentIndex].toString();
    }
  }
}
