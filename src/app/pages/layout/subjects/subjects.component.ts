import { Component } from '@angular/core';
import {CardComponent} from "./components/card/card.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCardActions} from "@angular/material/card";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    CardComponent,
    MatAnchor,
    MatButton,
    MatCardActions
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {

}
