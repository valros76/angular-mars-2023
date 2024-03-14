import { Component, OnInit } from '@angular/core';

import {ObservablesPreviewComponent} from "../observables-preview/observables-preview.component";

import {ObservablesPreview} from "../models/observables-preview.model";

@Component({
  selector: 'app-observables-exemples',
  standalone: true,
  imports: [
    ObservablesPreviewComponent
  ],
  templateUrl: './observables-exemples.component.html',
  styleUrl: './observables-exemples.component.css'
})
export class ObservablesExemplesComponent implements OnInit{
  observableMergeMap!:ObservablesPreview;
  observableExhaustMap!:ObservablesPreview;
  observableConcatMap!:ObservablesPreview;
  observableSwitchMap!:ObservablesPreview;

  ngOnInit(): void{
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

}
