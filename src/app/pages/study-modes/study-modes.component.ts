import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { StudyModeState } from '../../ngrx/study-mode/study-mode.state';
import * as StudyModeActions from '../../ngrx/study-mode/study-mode.actions';

@Component({
  selector: 'app-study-modes',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatIcon],
  templateUrl: './study-modes.component.html',
  styleUrl: './study-modes.component.scss',
})
export class StudyModesComponent implements OnInit {
  id!: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<{ studyMode: StudyModeState }>,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(
      StudyModeActions.storeIdFlashcard({ id: this.id as string }),
    );
  }

  routeToStudyMode(name: string) {
    name = name.toLowerCase();
    this.router.navigate([`/study-modes/${this.id}/${name}`]);
  }
}
