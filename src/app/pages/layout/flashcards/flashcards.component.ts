import { Component } from '@angular/core';
import {TopicHierarchyComponent} from "./components/topic-hierarchy/topic-hierarchy.component";
import {RegimeComponent} from "./components/regime/regime.component";
import {LessonContentComponent} from "./components/lesson-content/lesson-content.component";
import {PaginationControlComponent} from "./components/pagination-control/pagination-control.component";

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [
    TopicHierarchyComponent,
    RegimeComponent,
    LessonContentComponent,
    PaginationControlComponent
  ],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent {

}
