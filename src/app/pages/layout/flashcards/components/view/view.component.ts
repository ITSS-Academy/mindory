import {Component, Input} from '@angular/core';
import { MaterialModule } from '../../../../../shared/modules/material.module';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  @Input()
  viewFlashcards: any;
}
