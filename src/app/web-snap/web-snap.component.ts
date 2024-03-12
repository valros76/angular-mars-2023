import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WebSnap} from "../models/web-snap.model";

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

  ngOnInit(): void {
    
  }

  onLike(actualWebSnap: WebSnap): void {
    switch (actualWebSnap.isLiked) {
      case true:
        actualWebSnap.likes--;
        actualWebSnap.likeBtnClass = "like-cta";
        break;
      case false:
      default:
        actualWebSnap.likes++;
        actualWebSnap.likeBtnClass = "like-cta-active";
      break;
    }

    actualWebSnap.isLiked = !actualWebSnap.isLiked;
  }
}
