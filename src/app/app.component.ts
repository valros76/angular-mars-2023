import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WebSnapListComponent } from "./web-snap-list/web-snap-list.component";
import { HeaderComponent } from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ObservablesPreviewComponent} from "./observables-preview/observables-preview.component";

import {ObservablesPreview} from "./models/observables-preview.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    WebSnapListComponent,
    HeaderComponent,
    FooterComponent,
    ObservablesPreviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  observableMergeMap!:ObservablesPreview;
  observableExhaustMap!:ObservablesPreview;
  observableConcatMap!:ObservablesPreview;
  observableSwitchMap!:ObservablesPreview;

  ngOnInit() {
    this.observableMergeMap = new ObservablesPreview(
      /* observableTitle: */ "Exemple mergeMap",
      /* objectAText: */ "🥇",
      /* objectBText: */ "🥈",
      /* btnFluxAText: */ "Launch 🥇",
      /* btnFluxBText: */ "Launch 🥈",
      /* fluxIntructionType: */ "🥇/🥈",
      /* observableType: */ "mergeMapObservable"
    );
    this.observableExhaustMap = new ObservablesPreview(
      /* observableTitle: */ "Exemple exhaustMap",
      /* objectAText: */ "🍔",
      /* objectBText: */ "✖️",
      /* btnFluxAText: */ "Launch 🍔",
      /* btnFluxBText: */ "Launch ✖️",
      /* fluxIntructionType: */ "🍔/✖️",
      /* observableType: */ "exhaustMapObservable"
    );
    this.observableConcatMap = new ObservablesPreview(
      /* observableTitle: */ "Exemple concatMap",
      /* objectAText: */ "🚧",
      /* objectBText: */ "🪙",
      /* btnFluxAText: */ "Launch 🚧",
      /* btnFluxBText: */ "Launch 🪙",
      /* fluxIntructionType: */ "🚧/🪙",
      /* observableType: */ "concatMapObservable"
    );
    this.observableSwitchMap = new ObservablesPreview(
      /* observableTitle: */ "Exemple switchMap",
      /* objectAText: */ "🧔🏻",
      /* objectBText: */ "🦄",
      /* btnFluxAText: */ "Launch 🧔🏻",
      /* btnFluxBText: */ "Launch 🦄",
      /* fluxIntructionType: */ "🧔🏻/🦄",
      /* observableType: */ "switchMapObservable"
    );
  }

  debug(): void {
    console.log("debug");
  }

}