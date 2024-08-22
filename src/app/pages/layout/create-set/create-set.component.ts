import { Component } from '@angular/core';
import {MaterialModule} from "../../../shared/modules/material.module";
import {SharedModule} from "../../../shared/modules/shared.module";
import {NavbarComponent} from "../../../components/navbar/navbar.component";


@Component({
  selector: 'app-create-set',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent],
  templateUrl: './create-set.component.html',
  styleUrl: './create-set.component.scss'
})
export class CreateSetComponent {

}
