import { Routes } from '@angular/router';
import {
  InformationFolderComponent,
} from "./pages/layout/library/components/information-folder/information-folder.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layout/layout.routes').then((m) => m.LAYOUT_ROUTERS),
  },
  {
    path: 'study-modes/:uid',
    loadChildren: () =>
      import('./pages/study-modes/study-modes.routes').then(
        (m) => m.STUDY_MODES_ROUTERS,
      ),
  },
];
