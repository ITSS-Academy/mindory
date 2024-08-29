import { FlashcardBySubject } from './flashcard.model';

export interface SubjectModel {
  uid: string;
  name: string;
}

export interface SubjectByUid {
  uid: string;
  name: string;
  flashcards: FlashcardBySubject[];
}
