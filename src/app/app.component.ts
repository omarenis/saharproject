import { Component } from '@angular/core';
import {Pelerin} from "./pelerin";
import {PelerinlogService} from "./pelerinlog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfafront';
  pelerin:Pelerin=new Pelerin();
  constructor(private loginpelerinservice: PelerinlogService) { }

  ngOnInit(): void {
  }
  loginuser(){
    console.log(this.pelerin)
    this.loginpelerinservice.loginpelerin(this.pelerin).subscribe(data=>{
      alert("login successfuly")
    },error =>alert("sorry please enter your correct email and password"));
  }
}
