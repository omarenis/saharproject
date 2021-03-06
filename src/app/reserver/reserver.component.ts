import {Component, OnInit} from '@angular/core';
import {CommandLine, Person, SendToInvoiceService} from "../send-to-invoice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {
  public data: any = [{
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
  price !: number;
  person: Person = {
    nom: '',
    prenom: '',
    email: '',
    cin: '',
    passport: ''
  }
  commandLines !: CommandLine[]

  constructor(private sendToInvoice: SendToInvoiceService, private router: Router) {}

  ngOnInit(): void {
    this.discountChildUpto12 = 0;
    this.totalForAdults = 0;
    this.totalForChildren = 0;
    this.totalForBabies = 0;
    this.changeDiscounts('quad');
  }
  setCommandLines(typeQuad: string): void
  {
    this.commandLines = [{
      description: 'for adults',
      unitPrice: this.data[0][typeQuad],
      quantity: this.quantityForAdults,
      discount: this.discountChildUpto12,
      total: this.totalForBabies
    },
      {
        description: 'for children',
        unitPrice: this.data[0][typeQuad],
        quantity: this.quantityForChildren,
        discount: this.discountChildUnder12,
        total: this.totalForBabies
      },
      {
        description: 'for babies',
        unitPrice: this.data[0][typeQuad],
        quantity: this.quantityForBabies,
        discount: this.discountForBabies,
        total: this.totalForBabies
      }];
  }
  calculateWIthDiscount(unitPrice: number, quantity: number, discount: number): number {
    return unitPrice * quantity * (1 - discount / 100);
  }

  changeDiscounts(typeQuad: string) {
    this.setCommandLines(typeQuad);
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
    this.setCommandLines(typeQuad);
    this.price = this.totalForAdults + this.totalForBabies + this.totalForChildren;
  }

  actionAdd(typePurchase: string) {
    switch (typePurchase) {
      case 'forAdults':
        this.totalForAdults = Math.floor(this.totalForAdults * (1 + 1 / this.quantityForAdults));
        this.quantityForAdults++;
        break;
      case 'forChildren':
        this.totalForChildren = Math.floor(this.totalForChildren * (1 + 1 / this.quantityForChildren));
        this.quantityForChildren++;
        break;
      case 'forBabies':
        this.totalForBabies = Math.floor(this.totalForBabies * (1 + 1 / this.quantityForBabies));
        this.quantityForBabies++;
        break;
    }
    this.price = this.totalForAdults + this.totalForChildren + this.totalForBabies;
    this.setCommandLines(this.typeQuad);
  }

  actionMinus(typePurchase: string) {
    switch (typePurchase) {
      case 'forAdults':
        if (this.quantityForAdults > 1) {
          this.totalForAdults = Math.floor(this.totalForAdults * (1 - 1 / this.quantityForAdults));
          this.quantityForAdults--;
        }
        break;
      case 'forChildren':
        if (this.quantityForChildren > 1) {
          this.totalForChildren = Math.floor(this.totalForChildren * (1 - 1 / this.quantityForChildren));
          this.quantityForChildren--;
        }
        break;
      case 'forBabies':
        if (this.quantityForBabies > 1) {
          this.totalForBabies = Math.floor(this.totalForBabies * (1 - 1 / this.quantityForBabies));
          this.quantityForBabies--;
        }
        break;
    }
    this.price = this.totalForAdults + this.totalForChildren + this.totalForBabies;
    this.setCommandLines(this.typeQuad);
  }

  displayCommand() {
    this.sendToInvoice.setConnection({
        person: this.person,
        commandLines: this.commandLines,
        total: this.price
      });
    this.router.navigate(['/billing']);
  }
}
