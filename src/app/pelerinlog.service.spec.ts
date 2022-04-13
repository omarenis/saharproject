import { TestBed } from '@angular/core/testing';

import { PelerinlogService } from './pelerinlog.service';

describe('PelerinlogService', () => {
  let service: PelerinlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelerinlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
