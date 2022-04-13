import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  cheminImage:any = "images/1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
