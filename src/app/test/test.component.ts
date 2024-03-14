import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

import { TestApiService } from '../services/test-api';

import {Observable, take, map} from "rxjs";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  testDatas$!:Observable<any>;

  constructor(
    protected testApiService:TestApiService
  ){}



  ngOnInit(){
    this.testDatas$ = this.testApiService.test();
  }

  debug(datas:any){
    console.log(datas);
  }
}
