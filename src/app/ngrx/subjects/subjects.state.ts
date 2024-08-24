import { SubjectModel } from '../../models/subject.model';

export interface SubjectState {
  subjects: SubjectModel[];
  isGettingSubjectSuccessful: boolean;
  gettingSubjectError: string;
}
