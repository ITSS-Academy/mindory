import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { Question } from '../test/test.component';
import { NgClass, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { StudyModeState } from '../../../ngrx/study-mode/study-mode.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { FlashcardModel } from '../../../models/flashcard.model';

interface Card {
  id: number;
  questions: string;
}

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [SharedModule, MaterialModule, NgClass, NgIf],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss',
})
export class LearnComponent implements OnInit {
  subscription: Subscription[] = [];

  idFlashcard!: string;

  cards: Card[] = [];
  currentQuestionIndex = 0;
  selectedOption: any[] = [];

  feedback: string = '';
  showFeedback: boolean = false;
  progress: number = 0;
  showScore = false;

  questions: any[] = [];
  answer: any[] = [];

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
          let card: {
            questions: string;
            answer: string;
            uid: string;
          }[] = [];

          // Shuffle the flashcard.cards array
          const shuffledCards = newFlashcard.cards.sort(
            () => Math.random() - 0.5,
          );

          // Select the first 6 cards
          const currentQuestionIndex = shuffledCards.slice(0, 6);

          currentQuestionIndex.forEach((c) => {
            card.push({
              questions: c.term,
              answer: c.definition,
              uid: c.id,
            });
          });

          this.questions = card;
          this.answer = card;
          this.initializeQuestions();
        }
      }),
    );
  }

  initializeQuestions() {
    this.questions = this.questions
      .map((content) => ({
        id: content.uid,
        questions: content.questions,
        answer: content.answer,
      }))
      .sort(() => Math.random() - 0.5); // Shuffle cards
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
    console.log(this.currentQuestion);
  }

  selectOption(answer: string) {
    this.selectedOption = this.answer;
    this.checkAnswer();
  }

  checkAnswer() {
    this.showFeedback = true;

    if (this.selectedOption === this.currentQuestion.correctAnswer) {
      this.feedback = 'Correct!';
      this.currentQuestion.answeredCorrectly = true;
      this.progress++;
    } else {
      this.feedback =
        'Incorrect. The correct answer is ' +
        this.currentQuestion.correctAnswer +
        '.';
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 2000); // Delay before moving to the next question
  }

  nextQuestion() {
    this.showFeedback = false;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showScore = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;

    this.progress = 0;
    this.showScore = false;
    this.questions.forEach((q) => (q.answeredCorrectly = undefined));
  }

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
