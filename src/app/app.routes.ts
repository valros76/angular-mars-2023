import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebSnapListComponent } from './web-snap-list/web-snap-list.component';
import { SingleWebSnapComponent } from './single-web-snap/single-web-snap.component';
import { TestComponent } from './test/test.component';
import { ObservablesExemplesComponent } from './observables-exemples/observables-exemples.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "websnaps",
    component: WebSnapListComponent
  },
  {
    path:"websnap/:id",
    component:SingleWebSnapComponent
  },
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"exemples-observables",
    component:ObservablesExemplesComponent
  }
];