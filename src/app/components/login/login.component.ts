import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import { MaterialModule } from '../../shared/modules/material.module';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, MatDialogContent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private store: Store<{ auth: AuthState }>) {}

  signWithGoogle() {
    this.store.dispatch(AuthActions.login());
  }
}
