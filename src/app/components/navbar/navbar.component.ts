import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, SharedModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
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

  activeLink = this.navLinks[0];

  constructor(private router: Router) {
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
}
