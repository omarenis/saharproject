import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
export interface Person {
  nom: string;
  prenom: string;
  cin: string;
  passport: string;
  email: string;
}
export interface CommandLine
{

}
export interface Invoice
{
  person: Person;
  commandLines: CommandLine[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class SendToInvoiceService {
  private connection = new Subject<Invoice>();
    connected$ = this.connection.asObservable();
  constructor() { }
  public setConnection(invoice: Invoice){
    this.connection.next(invoice);
  }
}
