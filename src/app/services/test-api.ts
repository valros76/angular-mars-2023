import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestApiService{
  request = "http://192.168.1.44:5500/api/jwt/request";

  constructor(private http:HttpClient){}

  test(): Observable<any>{
    return this.http.get<any>(this.request);
  }
}