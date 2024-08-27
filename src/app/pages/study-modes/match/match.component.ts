import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { StudyModeState } from '../../../ngrx/study-mode/study-mode.state';
import { FlashcardModel } from '../../../models/flashcard.model';

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
  idFlashcard!: string;

  contents: any[] = [];

  isStarted = false;
  cards: Card[] = [];
  flippedCards: Card[] = [];
  matchedCardsCount = 0;
  points = 0; // Points tracking

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
            content: string;
            uid: string;
          }[] = [];

          // Shuffle the flashcard.cards array
          const shuffledCards = newFlashcard.cards.sort(
            () => Math.random() - 0.5,
          );

          // Select the first 6 cards
          const selectedCards = shuffledCards.slice(0, 6);

          selectedCards.forEach((c) => {
            card.push({
              content: c.term,
              uid: c.id,
            });
            card.push({
              content: c.definition,
              uid: c.id,
            });
          });

          this.contents = card;
          this.initializeCards();
        }
      }),
    );
  }

  initializeCards() {
    this.cards = this.contents
      .map((content) => ({
        id: content.uid,
        content: content.content,
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

    if (card1.id === card2.id) {
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

  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  ngOnDestroy() {}
}
