import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WebSnap} from "../models/web-snap.model";

import {WebSnapsService} from "../services/web-snaps.service";

@Component({
  selector: 'app-web-snap',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit {
  @Input() webSnap!:WebSnap;

  constructor(protected webSnapsService:WebSnapsService){}

  ngOnInit(): void {
  }
}
