import { Component, OnInit, Input } from '@angular/core';

import { ObservablesPreview } from '../models/overvables-preview';

@Component({
  selector: 'app-observables-preview',
  standalone: true,
  imports: [],
  templateUrl: './observables-preview.component.html',
  styleUrl: './observables-preview.component.css'
})
export class ObservablesPreviewComponent implements OnInit {
  @Input() observablesPreview!: ObservablesPreview;

  ngOnInit(): void {
    console.log(this.observablesPreview.launchObservableMethod(this.observablesPreview.observableType));
  }
}
