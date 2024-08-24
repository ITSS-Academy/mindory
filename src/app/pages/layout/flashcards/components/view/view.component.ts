import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';
import { CardModel } from '../../../../../models/card.model';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  @Input() card!: CardModel;
}
