import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import { Question } from '../test/test.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [SharedModule, MaterialModule, NgClass, NgIf],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss',
})
export class LearnComponent {
  questions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: [
        'Charles Dickens',
        'Leo Tolstoy',
        'William Shakespeare',
        'Mark Twain',
      ],
      correctAnswer: 'William Shakespeare',
    },
  ];

  currentQuestionIndex = 0;
  selectedOption: string = '';
  feedback: string = '';
  showFeedback: boolean = false;
  progress: number = 0;
  showScore = false;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  selectOption(option: string) {
    this.selectedOption = option;
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
    this.selectedOption = '';

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showScore = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedOption = '';
    this.progress = 0;
    this.showScore = false;
    this.questions.forEach((q) => (q.answeredCorrectly = undefined));
  }
}
