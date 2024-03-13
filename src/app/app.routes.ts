import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebSnapListComponent } from './web-snap-list/web-snap-list.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "websnaps",
    component: WebSnapListComponent
  }
];