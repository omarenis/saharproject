import { Component, OnInit } from '@angular/core';
import {VolService} from "../vol.service";

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit {
  vols:any;

  constructor(private  service:VolService) { }

  ngOnInit(): void {
    this.service.getVols().subscribe(data=>{
      this.vols=data;

    })
  }

}
