import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VolService {

  constructor(private http:HttpClient) { }
  getVols():Observable<object>{
    return this.http.get("http://localhost:5011/api/vols")

  }

}
