import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public dialog: MatDialog) {}

  cards = [
    {
      header: 'Header',
      subtitle: '5 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Monkey D. Luffy',
    },
    {
      header: 'Header',
      subtitle: '10 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Roronoa Zoro',
    },
    {
      header: 'Header',
      subtitle: '15 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Sanji',
    },
    {
      header: 'Header',
      subtitle: '20 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Usopp',
    },
    {
      header: 'Header',
      subtitle: '25 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Nami',
    },
    {
      header: 'Header',
      subtitle: '30 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Nico Robin',
    },
    {
      header: 'Header',
      subtitle: '35 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Franky',
    },
    {
      header: 'Header',
      subtitle: '40 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Brook',
    },
    {
      header: 'Header',
      subtitle: '45 terms',
      imgSrc: '../../../../../../assets/icon/13.jpg',
      name: 'Jinbe',
    },
  ];

  openPreview(): void {
    this.dialog.open(PreviewModalComponent, {
      width: '500px',
    });
  }
}
