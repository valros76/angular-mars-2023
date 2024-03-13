import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TestApiService{
  request = "http://192.168.1.44:5500/";

  constructor(private http:HttpClient){}

  test(){
    this.http.get(this.request);
  }
}