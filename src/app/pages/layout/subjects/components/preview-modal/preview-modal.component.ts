import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-preview-modal',
  standalone: true,
  imports: [],
  templateUrl: './preview-modal.component.html',
  styleUrl: './preview-modal.component.scss'
})
export class PreviewModalComponent {

  constructor(public dialogRef: MatDialogRef<PreviewModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
