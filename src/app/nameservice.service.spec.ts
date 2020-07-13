import { TestBed } from '@angular/core/testing';

import { NameserviceService } from './nameservice.service';

describe('NameserviceService', () => {
  let service: NameserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
