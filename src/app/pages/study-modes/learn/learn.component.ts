import { Component } from '@angular/core';
import {MultipleChoiceComponent} from "./components/multiple-choice/multiple-choice.component";

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    MultipleChoiceComponent
  ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {

}
