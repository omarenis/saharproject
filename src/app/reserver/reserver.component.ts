import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
  public data = [{
    quad: 9690,
    triple: 10890,
    double: 11890
  }];
  quantityForAdults = 1;
  quantityForChildren = 1;
  quantityForBabies = 1;
  typeQuad !: string;
  discountChildUnder12 !: number;
  discountChildUpto12  !: number;
  discountForBabies = 3.2;
  total !: number;
  totalForAdults !: number;
  totalForChildren !: number;
  totalForBabies !: number;
  priceForQuad !: number;
  priceForDouble !: number;
  priceForTriple !: number;
  constructor() { }

  ngOnInit(): void {
    this.discountChildUpto12 = 0;
    this.totalForAdults = 0;
    this.totalForChildren = 0;
    this.totalForBabies = 0;
    this.changeDiscounts('quad');
  }
  calculateWIthDiscount(unitPrice: number, quantity: number, discount: number): number {
    return unitPrice * quantity * (1 - discount / 100);
  }
  changeDiscounts(typeQuad: string)
  {
    if (typeQuad === 'quad') {
      this.discountChildUnder12 = 1.68;
      this.discountForBabies = 3.93;
    } else if (typeQuad === 'triple') {
      this.discountChildUnder12 = 0.74;
      this.discountForBabies = 3.49;
    } else {
      this.discountChildUnder12 = 0.67;
      this.discountForBabies = 3.2;
    }
  }
  addData(price: number, typeQuad: string) {
    this.typeQuad = typeQuad;
    this.changeDiscounts(typeQuad);
    this.totalForAdults = Math.floor(this.calculateWIthDiscount(price, this.quantityForAdults, this.discountChildUpto12));
    this.totalForChildren = Math.floor(this.calculateWIthDiscount(price, this.quantityForChildren, this.discountChildUnder12));
    this.totalForBabies = Math.floor(this.calculateWIthDiscount(price, this.quantityForBabies, this.discountForBabies));
  }
  actionAdd(typePurchase: string){
    switch(typePurchase)
    {
      case 'forAdults':
        this.quantityForAdults++;
        this.totalForAdults = Math.floor(this.totalForAdults * (1 + 1 / this.quantityForAdults));
        break;
      case 'forChildren':
        this.quantityForChildren++;
        this.totalForChildren = Math.floor(this.totalForChildren * (1 + 1 / this.quantityForChildren));
        break;
      case 'forBabies':
        this.quantityForBabies++;
        this.totalForBabies = Math.floor(this.totalForBabies * (1 + 1 / this.quantityForBabies));
        break;
    }
  }

  actionMinus(typePurchase: string){
    switch(typePurchase)
    {
      case 'forAdults':
        this.quantityForAdults--;
        break;
      case 'forChildren':
        this.quantityForChildren--;
        break;
      case 'forBabies':
        this.quantityForBabies--;
        break;
    }
  }
}
