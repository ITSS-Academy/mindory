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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig as any)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideStore(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideEffects(AuthEffects),
    provideHttpClient(),
  ],
};
