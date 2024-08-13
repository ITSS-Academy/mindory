import { Component } from '@angular/core';
import {MaterialModule} from "../../../../../shared/modules/material.module";
import {SharedModule} from "../../../../../shared/modules/shared.module";

@Component({
  selector: 'app-flashcard-sets',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './flashcard-sets.component.html',
  styleUrl: './flashcard-sets.component.scss'
})
export class FlashcardSetsComponent {

}
