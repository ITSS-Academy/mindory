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

  subscription: Subscription[] = [];
  idFlashcard!: string;
  cards: Card[] = [];
  currentQuestionIndex = 0;
  selectedOption: string = '';

  feedback: string = '';
  showFeedback: boolean = false;
  progress: number = 0;
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
    for (let i = 0; i < this.cards.length; i++) {
      const selectedCard =
        this.cards[Math.floor(Math.random() * this.cards.length)]; //lấy ngẫu nhiên 1 phần tử trong mảng
      const incorrectAnswers = this.cards // tạo biến hứng
        .filter((card) => card.id !== selectedCard.id) //
        .sort(() => Math.random() - 0.5) //trộn lấy giá trị âm hoặc dương ngẫu nhiên
        .slice(0, 3); //cắt 3 phần tử đầu tiên

      const answers = [selectedCard, ...incorrectAnswers] // tạo mảng mới gồm 2 biến selectedCard và incorrectAnswers
        .map((card) => card.definition)
        .sort(() => Math.random() - 0.5);

      this.questions.push({
        term: selectedCard.term,
        correctAnswer: selectedCard.definition,
        answers: answers,
      });
    }
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
      this.progress++;
    } else {
      this.feedback =
        'Incorrect. The correct answer is ' +
        this.currentQuestion.correctAnswer +
        '.';
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 2000);
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
    this.progress = 0;
    this.showScore = false;
    this.questions.forEach((q) => (q.answeredCorrectly = undefined));
  }

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
