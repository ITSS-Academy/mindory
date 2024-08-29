import { SubjectModel } from './subject.model';
import { CardDTO, CardModel } from './card.model';
import { Profile } from './profile.model';

export interface FlashcardModel {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  totalCards: number;
  subject: SubjectModel;
  cards: CardModel[];
  authorId: Profile;
}

export interface FlashcardDTO {
  flashcard: {
    title: string;
    description: string;
    isPublic: boolean;
    subject: SubjectModel;
    cards: CardDTO[];
  };
}

export interface FlashcardBySubject {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  totalCards: number;
  authorId: Profile;
}
