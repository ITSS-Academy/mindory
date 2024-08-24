import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  CdkFixedSizeVirtualScroll,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { SlidebarComponent } from '../../components/slidebar/slidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MaterialModule,
    SharedModule,
    NavbarComponent,
    CdkFixedSizeVirtualScroll,
    ScrollingModule,
    SlidebarComponent,
    NgClass,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isSlideBarVisible = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const slideBar = document.querySelector('.slide-bar');
    const menuIcon = document.querySelector('.menu-icon');
    if (
      slideBar &&
      !slideBar.contains(event.target as Node) &&
      menuIcon !== event.target &&
      this.isSlideBarVisible
    ) {
      this.isSlideBarVisible = false;
    }
  }

  onMenuClick(): void {
    this.isSlideBarVisible = true;
  }
}
