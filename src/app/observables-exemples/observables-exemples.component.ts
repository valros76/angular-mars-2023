import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, tap, Subject, takeUntil, Subscription, Observable} from "rxjs";

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

  testIntervalObservable$!:Observable<any>;
  testIntervalSubscription!:Subscription;
  notifier = new Subject();

  observableMergeMap!:ObservablesPreview;
  observableExhaustMap!:ObservablesPreview;
  observableConcatMap!:ObservablesPreview;
  observableSwitchMap!:ObservablesPreview;

  constructor(){}

  ngOnInit(): void{
    this.testIntervalObservable$ = interval(1000).pipe(
      takeUntil(this.notifier),
      tap(value => console.log(`Interval Observable : ${value}`)),
    );
    this.testIntervalObservable$.subscribe();

    
    this.testIntervalSubscription = interval(1000).pipe(
      takeUntil(this.notifier),
      tap(value => console.log(`Interval Subscribtion : ${value}`)),
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
    this.notifier.next(true);
    this.notifier.complete();
  }

}
