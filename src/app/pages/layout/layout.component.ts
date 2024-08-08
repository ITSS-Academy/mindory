import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
