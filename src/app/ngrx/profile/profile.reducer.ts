import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';
import { ProfileState } from './profile.state';
import { Profile } from '../../models/profile.model';

export const initialState: ProfileState = {
  profile: <Profile>{},
  isGettingProfileSuccessful: false,
  gettingProfileError: '',

  isCreatedProfileSuccessful: false,
  createdProfileError: '',
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.createProfile, (state, action) => {
    console.log(action.type);
    return {
      ...state,
    };
  }),

  on(ProfileActions.createProfileSuccess, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isCreatedProfileSuccessful: true,
    };
  }),

  on(ProfileActions.createProfileFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isCreatedProfileSuccessful: false,
      createdProfileError: errorMessage,
    };
  }),

  on(ProfileActions.getProfile, (state, action) => {
    console.log(action.type);
    return {
      ...state,
    };
  }),

  on(ProfileActions.getProfileSuccess, (state, { profile, type }) => {
    console.log(type);
    return {
      ...state,
      isGettingProfileSuccessful: true,
      profile: profile,
    };
  }),

  on(ProfileActions.getProfileFailure, (state, { errorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      isGettingProfileSuccessful: false,
      gettingProfileError: errorMessage,
    };
  }),
  on(ProfileActions.clearState, (state) => {
    return {
      ...state,
      isGettingProfileSuccessful: false,
      gettingProfileError: '',

      isCreatedProfileSuccessful: false,
      createdProfileError: '',
    };
  }),
);
