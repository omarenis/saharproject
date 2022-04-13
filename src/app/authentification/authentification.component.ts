import { Component, OnInit } from '@angular/core';
import {Pelerin} from "../pelerin";
import {PelerinlogService} from "../pelerinlog.service";


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],

})
export class AuthentificationComponent implements OnInit {
  pelerin:Pelerin=new Pelerin();
  constructor(private loginpelerinservice: PelerinlogService) { }

  ngOnInit(): void {
  }
  loginuser(){

    console.log(this.pelerin)
    this.loginpelerinservice.loginpelerin(this.pelerin).subscribe(data=>{
      alert("login successfuly")
      window.open("/plan")
    },error =>alert("sorry please enter your correct email and password"));
  }
}
