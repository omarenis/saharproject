import { TestBed } from '@angular/core/testing';

import { SendToInvoiceService } from './send-to-invoice.service';

describe('SendToInvoiceService', () => {
  let service: SendToInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendToInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
