import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

import { WebSnapComponent } from "../web-snap/web-snap.component";

import { WebSnap } from "../models/web-snap.model";

import {WebSnapsService} from "../services/web-snaps.service";

@Component({
  selector: 'app-web-snap-list',
  standalone: true,
  imports: [
    CommonModule,
    WebSnapComponent
  ],
  templateUrl: './web-snap-list.component.html',
  styleUrl: './web-snap-list.component.css'
})
export class WebSnapListComponent implements OnInit {

  webSnaps$!:Observable<WebSnap[]>;

  constructor(private webSnapsService:WebSnapsService){}

  ngOnInit() {
    this.webSnaps$ = this.webSnapsService.getAllWebSnaps();
  }
}
