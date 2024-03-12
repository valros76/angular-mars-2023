import { Component, OnInit } from '@angular/core';

import { WebSnapComponent } from "../web-snap/web-snap.component";

import { WebSnap } from "../models/web-snap.model";

import {WebSnapsService} from "../services/web-snaps.service";

@Component({
  selector: 'app-web-snap-list',
  standalone: true,
  imports: [
    WebSnapComponent
  ],
  templateUrl: './web-snap-list.component.html',
  styleUrl: './web-snap-list.component.css'
})
export class WebSnapListComponent implements OnInit {

  webSnaps!:WebSnap[];

  constructor(private webSnapsService:WebSnapsService){}

  ngOnInit() {
    this.webSnaps = this.webSnapsService.getAllWebSnaps();
  }
}
