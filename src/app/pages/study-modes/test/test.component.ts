import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {MatCard} from "@angular/material/card";

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  answeredCorrectly?: boolean;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    MatCard
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  questions: Question[] = [
    {
      question: 'What is the capital of France ?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],

      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    }
  ];

  selectedOption: string = '';
  currentQuestionIndex = 0;


  selectOption(option: string, index: number) {
    if (this.selectedOption === option && this.currentQuestionIndex === index) {
      this.selectedOption = '';
      this.currentQuestionIndex = -1;
    } else {
      this.selectedOption = option;
      this.currentQuestionIndex = index;
    }
  }

  isSelected(option: string, index: number): boolean {
    return this.selectedOption === option && this.currentQuestionIndex === index;
  }
}


