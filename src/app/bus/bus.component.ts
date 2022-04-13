import { Component, OnInit } from '@angular/core';
import {BusService} from "../bus.service";

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  bus:any;

  constructor(private service:BusService) { }
  ngOnInit(): void {
    this.service.getBus().subscribe(data=>{
      this.bus=data;

    })
  }

}
