import { Routes } from '@angular/router';

import {WebSnapListComponent} from "./web-snap-list/web-snap-list.component";
import {TestComponent} from "./test/test.component";

export const routes: Routes = [
  {
    path:"",
    component:WebSnapListComponent
  },
  {
    path:"test",
    component: TestComponent
  }
];
