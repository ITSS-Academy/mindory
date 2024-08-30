import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { StudyModeState } from '../../../ngrx/study-mode/study-mode.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { FlashcardModel } from '../../../models/flashcard.model';
import { Subscription } from 'rxjs';
import { MatButton } from '@angular/material/button';

export interface Question {
  term: string;
  answers: string[];
  correctAnswer: string;
}

interface Card {
  id: string;
  term: string;
  definition: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgClass, NgForOf, MatCard, MatButton, NgIf],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  questions: Question[] = [];

  selectedOptions: string[] = []; // To store selected options for each question
  correctAnswers: boolean[] = []; // To store if each question was answered correctly
  isSubmitted: boolean = false; // To track if the quiz has been submitted

  idFlashcard!: string;
  cards: Card[] = [];

  subscription: Subscription[] = [];

  constructor(
    private store: Store<{
      auth: AuthState;
      flashcard: FlashcardState;
      studyMode: StudyModeState;
    }>,
  ) {}

  ngOnInit() {
    this.subscription.push(
      this.store.select('studyMode', 'idFlashcard').subscribe((idFlashcard) => {
        this.idFlashcard = idFlashcard;
      }),
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.store.dispatch(
            FlashcardActions.getFlashcard({
              idToken: idToken,
              flashcardId: this.idFlashcard,
            }),
          );
        }
      }),
      this.store.select('flashcard', 'flashcard').subscribe((flashcard) => {
        if (flashcard.cards !== undefined) {
          const newFlashcard: FlashcardModel = this.deepCopy(flashcard);
          this.cards = newFlashcard.cards;
          this.initializeQuestions();
        }
      }),
    );
  }

  initializeQuestions() {
    // Shuffle the cards array
    this.cards = this.shuffleArray(this.cards);

    for (let i = 0; i < this.cards.length; i++) {
      const selectedCard = this.cards[i];
      const incorrectAnswers = this.cards
        .filter((card) => card.id !== selectedCard.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const answers = [selectedCard, ...incorrectAnswers]
        .map((card) => card.definition)
        .sort(() => Math.random() - 0.5);

      this.questions.push({
        term: selectedCard.term,
        correctAnswer: selectedCard.definition,
        answers: answers,
      });

      this.selectedOptions[i] = ''; // Initialize selected options for each question
      this.correctAnswers[i] = false; // Initialize the correctAnswers array
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  selectOption(option: string, index: number) {
    this.selectedOptions[index] = option;
  }

  isSelected(option: string, index: number): boolean {
    return this.selectedOptions[index] === option;
  }

  submitAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      this.correctAnswers[i] =
        this.selectedOptions[i] === this.questions[i].correctAnswer;
    }

    // Here you can add logic to show feedback or handle results
    console.log('Selected Options:', this.selectedOptions);
    console.log('Correct Answers:', this.correctAnswers);
    this.isSubmitted = true;
  }

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
