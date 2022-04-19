import { Component, OnInit } from '@angular/core';
import {Invoice, SendToInvoiceService} from '../send-to-invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public invoice !: Invoice;
  constructor(private sendToInvoice:SendToInvoiceService) { }

  ngOnInit(): void {
    this.sendToInvoice.connected$.subscribe((response) => {
      this.invoice = response;
    });
  }

}
