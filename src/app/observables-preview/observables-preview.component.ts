import { Component, OnInit, Input } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ObservablesPreview } from '../models/observables-preview.model';

@Component({
  selector: 'app-observables-preview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './observables-preview.component.html',
  styleUrl: './observables-preview.component.css'
})
export class ObservablesPreviewComponent implements OnInit {
  @Input() observablesPreview!: ObservablesPreview;

  ngOnInit(): void {
    console.log(this.observablesPreview.launchObservableMethod(this.observablesPreview.observableType));
  }
}
