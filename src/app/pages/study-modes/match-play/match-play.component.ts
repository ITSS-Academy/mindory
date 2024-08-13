import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
//import {Card} from "../../../models/match-card";

interface Card {
  id: number;
  content: string;
  flipped: boolean;
  matched: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-match-play',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    NgClass,
    NgIf
  ],
  templateUrl: './match-play.component.html',
  styleUrl: './match-play.component.scss'
})



export class MatchPlayComponent implements OnInit {

  cards: Card[] = [];
  flippedCards: Card[] = [];
  matchedCardsCount = 0;
  points = 0;  // Points tracking

  ngOnInit() {
    this.initializeCards();
  }

  initializeCards() {
    const contents = ['Apple', 'Banana', 'Orange', 'Grapes', 'Apple', 'Banana', 'Orange', 'Grapes'];
    this.cards = contents
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
    this.points = 0;  // Reset points
    this.initializeCards();
  }
}
