import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './ngrx/auth/auth.reducer';
import { AuthEffects } from './ngrx/auth/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { profileReducer } from './ngrx/profile/profile.reducer';
import { ProfileEffects } from './ngrx/profile/profile.effects';
import { flashcardReducer } from './ngrx/flashcard/flashcard.reducer';
import { FlashcardEffects } from './ngrx/flashcard/flashcard.effects';
import { subjectReducer } from './ngrx/subjects/subjects.reducer';
import { SubjectEffects } from './ngrx/subjects/subjects.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig as any)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideStore(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideState({ name: 'profile', reducer: profileReducer }),
    provideState({ name: 'flashcard', reducer: flashcardReducer }),
    provideState({ name: 'subject', reducer: subjectReducer }),

    provideEffects(
      AuthEffects,
      ProfileEffects,
      FlashcardEffects,
      SubjectEffects,
    ),
    provideHttpClient(),
  ],
};
