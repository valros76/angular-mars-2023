import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { WebSnap } from "../models/web-snap.model";

import { WebSnapsService } from '../services/web-snaps.service';

@Component({
  selector: 'app-single-web-snap',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './single-web-snap.component.html',
  styleUrl: './single-web-snap.component.css'
})
export class SingleWebSnapComponent implements OnInit {
  webSnap!: WebSnap;

  constructor(
    protected webSnapsService: WebSnapsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const webSnapId = Number(this.route.snapshot.params["id"]);
    this.webSnap = this.webSnapsService.getWebSnapById(webSnapId);
  }

}
