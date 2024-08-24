import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { AuthState } from '../../ngrx/auth/auth.state';
import * as AuthActions from '../../ngrx/auth/auth.actions';

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [MaterialModule, SharedModule, NgClass],
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.scss',
})
export class SlidebarComponent implements OnInit {
  navLinks = [
    {
      name: 'Home',
      route: '/home',
      icon: 'home',
    },
    {
      name: 'Library',
      route: '/library',
      icon: 'folder_open',
    },
    {
      name: 'Subjects',
      route: '/subjects',
      icon: 'category',
    },
  ];

  activeLink = this.navLinks[0];

  constructor(
    private router: Router,
    private store: Store<{ profile: ProfileState; auth: AuthState }>,
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

  signOut() {
    this.store.dispatch(AuthActions.logout());
  }
}
