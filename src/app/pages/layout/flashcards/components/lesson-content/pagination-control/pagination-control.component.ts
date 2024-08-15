import { Component, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../../../../../shared/modules/shared.module';
import { MaterialModule } from '../../../../../../shared/modules/material.module';

@Component({
  selector: 'app-pagination-control',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './pagination-control.component.html',
  styleUrls: ['./pagination-control.component.scss']
})
export class PaginationControlComponent {
  @Output() nextPage = new EventEmitter<void>();
  @Output() previousPage = new EventEmitter<void>();

  page = 1;

  onNextPage() {
    this.page++;
    this.nextPage.emit();
  }

  onPreviousPage() {
    if (this.page > 1) {
      this.page--;
      this.previousPage.emit();
    }
  }
}
