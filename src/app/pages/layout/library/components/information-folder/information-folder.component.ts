import { Component } from '@angular/core';
import {CardFolderComponent} from "../card-folder/card-folder.component";

@Component({
  selector: 'app-information-folder',
  standalone: true,
  imports: [
    CardFolderComponent
  ],
  templateUrl: './information-folder.component.html',
  styleUrl: './information-folder.component.scss'
})
export class InformationFolderComponent {

}
