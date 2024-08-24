import { FlashcardModel } from '../../models/flashcard.model';

export interface FlashcardState {
  flashcard: FlashcardModel;
  isGetFlashcardSuccess: boolean;
  getFlashcardError: string;
}
