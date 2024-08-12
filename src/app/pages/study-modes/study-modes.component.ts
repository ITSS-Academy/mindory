import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-study-modes',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './study-modes.component.html',
  styleUrl: './study-modes.component.scss',
})
export class StudyModesComponent {}