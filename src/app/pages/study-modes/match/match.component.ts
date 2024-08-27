import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Subscription, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';
import { FlashcardState } from '../../../ngrx/flashcard/flashcard.state';
import * as FlashcardActions from '../../../ngrx/flashcard/flashcard.actions';
import { CardModel } from '../../../models/card.model';
import { FlashcardModel } from '../../../models/flashcard.model';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [MatButton, RouterLink, NgForOf, NgIf, NgClass],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss',
})
export class MatchComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];

  cards: CardModel[] = [];
  shuffledCards: any[] = [];
  points: number = 0;

  constructor(
    private store: Store<{ auth: AuthState; flashcard: FlashcardState }>,
  ) {}

  ngOnInit(): void {
    // this.store
    //   .select('flashcard', 'flashcard')
    //   .subscribe((flashcard: CardModel[]) => {
    //     if (flashcard) {
    //       this.cards = flashcard;
    //       this.initializeCards();
    //     }
    //   });
  }

  initializeCards(): void {
    let terms = this.cards.map((card) => ({
      id: card.id,
      content: card.term,
      type: 'term',
    }));
    let definitions = this.cards.map((card) => ({
      id: card.id,
      content: card.definition,
      type: 'definition',
    }));
    this.shuffledCards = this.shuffle([...terms, ...definitions]);
  }
  shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onCardClick(card: any): void {
    // Add logic to handle card click and match logic
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
