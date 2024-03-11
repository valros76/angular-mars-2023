import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-snap',
  standalone: true,
  imports: [],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit{
  title!:string;
  imageUrl!:string;
  description!:string;
  createdDate!:Date;
  likes!:number;

  ngOnInit(): void{
    this.title = "Webdevoo";
    this.imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80";
    this.description = "Concepteur de sites web et boutiques en ligne";
    this.createdDate = new Date();
    this.likes = 4;
  }

  onAddLike(): void{
    this.likes++;
  }
}
