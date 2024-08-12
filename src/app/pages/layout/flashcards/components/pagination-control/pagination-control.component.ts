import { Component } from '@angular/core';
import {SharedModule} from "../../../../../shared/modules/shared.module";
import {MaterialModule} from "../../../../../shared/modules/material.module";


@Component({
  selector: 'app-pagination-control',
  standalone: true,
  imports: [ SharedModule, MaterialModule ],
  templateUrl: './pagination-control.component.html',
  styleUrl: './pagination-control.component.scss'
})
export class PaginationControlComponent {

}
