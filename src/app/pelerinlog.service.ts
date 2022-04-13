import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pelerin} from "./pelerin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PelerinlogService {
  private baseUrl="http://localhost:5011/api/login"
  constructor(private httpClient:HttpClient) { }
  loginpelerin(pelerin: Pelerin):Observable<object> {
    console.log(pelerin)
    return this.httpClient.post(`${this.baseUrl}`,pelerin);
  }
}
