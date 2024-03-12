import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WebSnapComponent } from "./web-snap/web-snap.component";

import { WebSnap } from "./models/web-snap.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    WebSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  webSnaps!: WebSnap[];

  ngOnInit() {
    this.webSnaps = [
      new WebSnap(
        "Webdevoo",
        "Concepteur de sites web et boutiques en ligne.",
        new Date(),
        0,
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        "Paris"
      ),
      new WebSnap(
        "Philiance",
        "Organisme de formation.",
        new Date(),
        200,
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
      new WebSnap(
        "Jadenya",
        "Boutique en ligne d'articles de mode et d'accessoires pour la maison.",
        new Date(),
        0,
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      )
    ];
  }

  debug(): void {
    console.log(this.webSnaps);
  }

}