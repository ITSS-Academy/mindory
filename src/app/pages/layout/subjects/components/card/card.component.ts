import { Component } from '@angular/core';
import {MaterialModule} from "../../../../../shared/modules/material.module";
import {SharedModule} from "../../../../../shared/modules/shared.module";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
