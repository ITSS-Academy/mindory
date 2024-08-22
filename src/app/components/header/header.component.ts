import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  closeStudyMode() {
    this.router.navigate(['/home']);
  }
}
