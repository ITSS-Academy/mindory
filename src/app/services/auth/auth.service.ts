import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async loginWithGoogle() {
    const auth = this.auth;
    const provider = new GoogleAuthProvider();

    try {
      const credential = await signInWithPopup(auth, provider);
      if (credential.user) {
        return await credential.user.getIdToken();
      }
      throw new Error('User not found');
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
    } catch (error) {
      throw error;
    }
  }
}
