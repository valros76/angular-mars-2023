import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

import {Observable, interval, pipe, map, filter} from "rxjs";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

  interval$!:Observable<string>;

  testAPI = fetch("https://php-emailing.dev/api/jwt/request");



  ngOnInit(){
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? "Paire" : "Impaire"),
    );
  }
}
