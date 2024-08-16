
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
  a = ["BROTHER","SISTER","SISTER","FRIEND","MOTHER","FATHER","GRANDFATHER","GRANDMOTHER","UNCLE","AUNT"];
  b = ["ANH TRAI","EM GÁI","CHỊ","BẠN BÈ","MẸ","BỐ","ÔNG","BÀ","CHÚ","CÔ"];

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
