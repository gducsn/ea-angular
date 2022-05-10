import { TestBed } from '@angular/core/testing';

import { VerticalDrawerService } from './vertical-drawer.service';

describe('VerticalDrawerService', () => {
  let service: VerticalDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerticalDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
