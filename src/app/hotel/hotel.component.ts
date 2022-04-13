import { Component, OnInit } from '@angular/core';
import {HotelService} from "../hotel.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels:any;

  constructor(private  service:HotelService) { }

  ngOnInit(): void {
    this.service.getHotels().subscribe(data=>{
      this.hotels=data;

    })
  }

}
