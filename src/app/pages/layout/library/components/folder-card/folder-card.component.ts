import { Component } from '@angular/core';

import {makeRelatedInformation} from "@angular/compiler-cli/src/ngtsc/diagnostics";
import {RouterLink} from "@angular/router";
import {InformationFolderComponent} from "../information-folder/information-folder.component";

@Component({
  selector: 'app-folder-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './folder-card.component.html',
  styleUrl: './folder-card.component.scss'
})
export class FolderCardComponent {

  protected readonly InformationFolderComponent = InformationFolderComponent;
}
