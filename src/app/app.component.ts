import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {WebSnapComponent} from "./web-snap/web-snap.component";

import {WebSnap} from "./models/web-snap.model";

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
export class AppComponent implements OnInit{

  myWebSnap!:WebSnap;

  ngOnInit(){
    this.myWebSnap = new WebSnap(
      "Webdevoo",
      "Concepteur de sites web et boutiques en ligne",
      new Date(),
      0,
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      "like-cta",
      false
    );
  }

  debug(){
    console.log(this.myWebSnap.title);
  }

}