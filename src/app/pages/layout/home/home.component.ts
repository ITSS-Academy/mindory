import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/modules/material.module';
import { SharedModule } from '../../../shared/modules/shared.module';
import {FlashcardSetsComponent} from "./components/flashcard-sets/flashcard-sets.component";
import {PopularQuestionComponent} from "./components/popular-question/popular-question.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, SharedModule, FlashcardSetsComponent, PopularQuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
