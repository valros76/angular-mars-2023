import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, map, switchMap} from "rxjs";

import { WebSnap } from "../models/web-snap.model";

@Injectable({
  providedIn: "root"
})
export class WebSnapsService {
  webSnaps: WebSnap[] = [
    {
      id: 1,
      title: "Webdevoo",
      description: "Concepteur de sites web et boutiques en ligne.",
      createdDate: new Date(),
      likes: 0,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      location: "Paris",
      likeBtnClass: "like-cta",
      isLiked: false
    },
    {
      id: 2,
      title: "Philiance",
      description: "Organisme de formation.",
      createdDate: new Date(),
      likes: 200,
      imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likeBtnClass: "like-cta",
      isLiked: false
    },
    {
      id: 3,
      title: "Jadenya",
      description: "Boutique en ligne d'articles de mode et d'accessoires pour la maison.",
      createdDate: new Date(),
      likes: 0,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likeBtnClass: "like-cta",
      isLiked: false
    }
  ];

  constructor(private http:HttpClient){}

  addWebSnap(formValue: {
    title: string,
    description: string,
    imageUrl: string,
    location?: string
  }){
    const webSnap:WebSnap = {
      ...formValue,
      id: (this.webSnaps[this.webSnaps.length - 1].id + 1),
      createdDate: new Date(),
      likes: 0,
      likeBtnClass: "like-cta",
      isLiked: false
    };

    this.webSnaps.push(webSnap);
  }

  getAllWebSnaps(): Observable<WebSnap[]> {
    return this.http.get<WebSnap[]>("http://localhost:3000/websnaps");
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

  getWebSnapById(webSnapId: number): Observable<WebSnap> {
    return this.http.get<WebSnap>(`http://localhost:3000/websnaps/${webSnapId}`);
  }

  handleLikeById(webSnapId: number, likeType: "like"|"unlike"): Observable<WebSnap>{
    const webSnap$ = this.getWebSnapById(webSnapId);
    return webSnap$.pipe(
      map(
        actualWebSnap => ({
          ...actualWebSnap,
          likes: actualWebSnap.likes + (likeType === "like" ? 1 : -1),
          isLiked: (likeType === "like" ? true : false),
          likeBtnClass: (likeType === "like" ? "like-cta-active" : "like-cta")
        })
      ),
      switchMap(
        updatedWebSnap => 
        this.http.put<WebSnap>(`http://localhost:3000/websnaps/${webSnapId}`, updatedWebSnap)
        )
    );
  }
}