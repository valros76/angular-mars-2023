import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { WebSnap } from "../models/web-snap.model";
import { WebSnapsService } from "../services/web-snaps.service";

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
  @Input() webSnap!: WebSnap;

  constructor(
    protected webSnapsService: WebSnapsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onViewWebSnap(){
    this.router.navigateByUrl(`/websnap/${this.webSnap.id}`);
  }
}
