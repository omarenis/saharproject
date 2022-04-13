import { TestBed } from '@angular/core/testing';

import { PersonneserviceService } from './personneservice.service';

describe('PersonneserviceService', () => {
  let service: PersonneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
