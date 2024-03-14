import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, tap, Subject, takeUntil, Subscription} from "rxjs";

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
export class ObservablesExemplesComponent implements OnInit, OnDestroy{

  testInterval!:Subscription;

  observableMergeMap!:ObservablesPreview;
  observableExhaustMap!:ObservablesPreview;
  observableConcatMap!:ObservablesPreview;
  observableSwitchMap!:ObservablesPreview;

  constructor(
    // private destroy$:Subject<boolean>
    ){}

  ngOnInit(): void{
    this.testInterval = interval(1000).pipe(
      // takeUntil(this.destroy$),
      tap(value => console.log(value)),
    ).subscribe();

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

  ngOnDestroy(){
    // this.destroy$.next(true);
    this.testInterval.unsubscribe();
  }

}
