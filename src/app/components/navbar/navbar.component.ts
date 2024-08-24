import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.state';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, SharedModule, NgClass, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter<void>();

  onMenuClick(): void {
    this.menuClick.emit();
  }

  navLinks = [
    {
      name: 'Home',
      route: '/home',
    },
    {
      name: 'Library',
      route: '/library',
    },
    {
      name: 'Subjects',
      route: '/subjects',
    },
  ];
  dialog = inject(MatDialog);
  profile$ = this.store.select('profile', 'isGettingProfileSuccessful');
  photoUrl = '';

  activeLink = this.navLinks[0];

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState; profile: ProfileState }>,
  ) {
    if (this.router.url.includes('home')) {
      this.activeLink = this.navLinks[0];
    } else if (this.router.url.includes('library')) {
      this.activeLink = this.navLinks[1];
    } else if (this.router.url.includes('subjects')) {
      this.activeLink = this.navLinks[2];
    } else if (this.router.url.includes('profile')) {
      this.activeLink = this.navLinks[3];
    }
  }

  ngOnInit(): void {
    this.store.select('auth', 'isLoginSuccess').subscribe((isLoginSuccess) => {
      if (isLoginSuccess) {
        this.dialog.closeAll();
      }
    });
    this.store.select('profile', 'profile').subscribe((profile) => {
      this.photoUrl = profile.photoUrl;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveLinkBasedOnUrl();
      });
    this.setActiveLinkBasedOnUrl();
  }

  setActive(link: any) {
    this.activeLink = link;
    this.router.navigateByUrl(link.route).then();
  }

  setActiveLinkBasedOnUrl() {
    if (this.router.url.includes('home')) {
      this.activeLink = this.navLinks[0];
    } else if (this.router.url.includes('library')) {
      this.activeLink = this.navLinks[1];
    } else if (this.router.url.includes('subjects')) {
      this.activeLink = this.navLinks[2];
    } else if (this.router.url.includes('profile')) {
      this.activeLink = this.navLinks[3];
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '40vw';
    dialogConfig.maxWidth = '80vw';
    dialogConfig.panelClass = 'custom-dialog-container';

    this.dialog.open(LoginComponent, dialogConfig);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
