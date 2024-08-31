import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import { StudyModeState } from '../../../ngrx/study-mode/study-mode.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { FlashcardModel } from '../../../models/flashcard.model';

interface Card {
  id: string;
  term: string;
  definition: string;
}

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [SharedModule, MaterialModule, NgClass, NgIf, AsyncPipe],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {
  correctSound = new Audio('assets/sound/correct-choice.mp3');
  incorrectSound = new Audio('assets/sound/wrong-answer.mp3');

  subscription: Subscription[] = [];
  idFlashcard!: string;
  cards: Card[] = [];
  currentQuestionIndex = 0;
  selectedOption: string = '';

  feedback: string = '';
  showFeedback: boolean = false;
  progressbar: number = 0;
  progress: number = 1;
  showScore = false;

  questions: any[] = [];

  isGetFlashcardSuccess$ = this.store.select(
    'flashcard',
    'isGetFlashcardSuccess',
  );

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
    // Shuffle the cards array once at the beginning
    const shuffledCards = this.shuffleArray([...this.cards]);

    // Loop through the shuffled array to create the questions array
    for (let i = 0; i < shuffledCards.length; i++) {
      const selectedCard = shuffledCards[i];

      const incorrectAnswers = this.cards
        .filter((card) => card.id !== selectedCard.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const answers = [
        selectedCard.definition,
        ...incorrectAnswers.map((card) => card.definition),
      ].sort(() => Math.random() - 0.5);

      this.questions.push({
        term: selectedCard.term,
        correctAnswer: selectedCard.definition,
        answers: answers,
      });
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  get currentQuestion() {
    if (this.questions.length === 0) {
      return;
    }

    return this.questions[this.currentQuestionIndex];
  }

  selectOption(answer: string) {
    if (this.selectedOption === '') {
      // Check if an option has already been selected
      this.selectedOption = answer;
      this.checkAnswer();
    }
  }

  checkAnswer() {
    this.showFeedback = true;

    if (this.selectedOption === this.currentQuestion.correctAnswer) {
      this.feedback = 'Correct!';
      this.correctSound.play();
      this.progressbar++;
    } else {
      this.feedback =
        'Incorrect. The correct answer is ' +
        this.currentQuestion.correctAnswer +
        '.';

      this.incorrectSound.play();
    }

    setTimeout(() => {
      this.nextQuestion();
      this.progress++;
    }, 3500);
  }

  nextQuestion() {
    this.showFeedback = false;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = '';
    } else {
      this.showScore = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.progressbar = 0;
    this.progress = 0;
    this.showScore = false;
    this.questions.forEach((q) => (q.answeredCorrectly = undefined));
    this.selectedOption = '';
    this.progress++;
  }

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
