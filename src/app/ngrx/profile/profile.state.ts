import { Profile } from '../../models/profile.model';

export interface ProfileState {
  profile: Profile;
  isGettingProfileSuccessful: boolean;
  gettingProfileError: string;

  isCreatedProfileSuccessful: boolean;
  createdProfileError: string;
}
