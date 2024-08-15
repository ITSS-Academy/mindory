import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatCardActions } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CardComponent,
    MatAnchor,
    MatButton,
    MatCardActions,
    MatChipsModule,
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent {
  readonly categories: string[] = [
    'Anthropology',
    'Business',
    'Economics',
    'Human Geography',
    'Law',
    'Political Science',
    'Psychology',
    'Sociology',
    'Siberian HuskyWorld Geography',
  ];
}
