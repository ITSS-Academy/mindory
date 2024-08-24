import { SubjectModel } from './subject.model';
import { CardModel } from './card.model';
import { Profile } from './profile.model';

export interface FlashcardModel {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  subjectId: SubjectModel;
  cards: CardModel[];
  authorId: Profile;
}
