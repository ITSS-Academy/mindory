import { Component } from '@angular/core';
import {MaterialModule} from "../../../../../shared/modules/material.module";
import {SharedModule} from "../../../../../shared/modules/shared.module";
import {PreviewModalComponent} from "../preview-modal/preview-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(public dialog: MatDialog) {}

  openPreview(): void {
    this.dialog.open(PreviewModalComponent, {
      width: '500px',
    });
  }
}
