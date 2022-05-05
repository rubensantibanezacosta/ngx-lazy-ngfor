import { TestBed } from '@angular/core/testing';

import { NgxLazyNgforService } from './ngx-lazy-ngfor.service';

describe('NgxLazyNgforService', () => {
  let service: NgxLazyNgforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLazyNgforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
