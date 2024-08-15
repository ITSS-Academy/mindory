import { Component } from '@angular/core';
import {MaterialModule} from "../../../shared/modules/material.module";
import {SharedModule} from "../../../shared/modules/shared.module";
import {FlashcardCardComponent} from "./components/flashcard-card/flashcard-card.component";
import {FolderCardComponent} from "./components/folder-card/folder-card.component";
import {InformationFolderComponent} from "./components/information-folder/information-folder.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [MaterialModule, SharedModule, FlashcardCardComponent, FolderCardComponent, InformationFolderComponent,RouterLink],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

  protected readonly InformationFolderComponent = InformationFolderComponent;
}
