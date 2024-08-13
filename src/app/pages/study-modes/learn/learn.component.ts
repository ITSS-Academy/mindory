import { Component } from '@angular/core';
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import {MultipleChoiceComponent} from "./components/multiple-choice/multiple-choice.component";

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    ProgressBarComponent,
    MultipleChoiceComponent
  ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {

}
