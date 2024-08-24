import { Subject } from '../../models/subjects.model';

export interface SubjectsState {
  subject: Subject;
  isGettingSubjectSuccessful: boolean;
  gettingSubjectError: string;

}
