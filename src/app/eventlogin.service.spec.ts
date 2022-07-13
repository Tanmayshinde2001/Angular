import { TestBed } from '@angular/core/testing';

import { EventloginService } from './eventlogin.service';

describe('EventloginService', () => {
  let service: EventloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
