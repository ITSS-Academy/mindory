import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';

interface Card {
  id: number;
  content: string;
  flipped: boolean;
  matched: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [MatButton, RouterLink, NgForOf, NgIf, NgClass],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss',
})
export class MatchComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  contents = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
  ];
  isStarted = false;
  cards: Card[] = [];
  flippedCards: Card[] = [];
  matchedCardsCount = 0;
  points = 0; // Points tracking

  constructor(
    private store: Store<{ auth: AuthState; flashcard: FlashcardState }>,
  ) {}

  ngOnInit() {
    this.subscription.push(
      this.store.select('auth', 'idToken').subscribe((idToken) => {
        if (idToken) {
          this.store.dispatch(
            FlashcardActions.getFlashcard({
              idToken: idToken,
              flashcardId: 'f3428598-79e6-4841-8453-eb085e542a58',
            }),
          );
        }
      }),
      this.store.select('flashcard', 'flashcard').subscribe((flashcard) => {
        if (flashcard) {
        }
      }),
    );
    this.initializeCards();
  }

  initializeCards() {
    this.cards = this.contents
      .map((content, index) => ({
        id: index,
        content,
        flipped: false,
        matched: false,
        visible: true,
      }))
      .sort(() => Math.random() - 0.5); // Shuffle cards
  }

  flipCard(card: Card) {
    if (card.flipped || card.matched || this.flippedCards.length === 2) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.content === card2.content) {
      card1.matched = true;
      card2.matched = true;

      // Update points
      this.points += 10;

      // Hide matched cards after a short delay
      setTimeout(() => {
        card1.visible = false;
        card2.visible = false;
        this.matchedCardsCount += 2;
      }, 500);
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
      }, 1000);
    }

    this.flippedCards = [];
  }

  resetGame() {
    this.matchedCardsCount = 0;
    this.flippedCards = [];
    this.points = 0; // Reset points
    this.initializeCards();
  }

  start() {
    this.isStarted = true;
  }

  ngOnDestroy() {}
}
