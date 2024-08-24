import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() studyMode = new EventEmitter<string>();
  dropDownLinks = [
    {
      name: 'Flashcards',
      imgUrl: 'assets/icon/flashcard.svg',
    },
    {
      name: 'Learn',
      imgUrl: 'assets/icon/learn.svg',
    },
    {
      name: 'Match',
      imgUrl: 'assets/icon/match.svg',
    },
    {
      name: 'Test',
      imgUrl: 'assets/icon/test.svg',
    },
  ];
  activeLink = {
    name: 'Flashcards',
    imgUrl: 'assets/icon/flashcard.svg',
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLinkAndDropDownLinks();
      }
    });
    this.updateActiveLinkAndDropDownLinks();
  }

  ngOnInit(): void {}

  closeStudyMode() {
    this.router.navigate(['/home']);
  }

  chooseStudyMode(name: string) {
    this.studyMode.emit(name);
  }

  updateActiveLinkAndDropDownLinks() {
    const url = this.router.url;

    this.dropDownLinks.forEach((link) => {
      const linkLower = link.name.toLowerCase();
      if (url.includes(linkLower)) {
        this.activeLink = link;
      }
    });
  }
}
