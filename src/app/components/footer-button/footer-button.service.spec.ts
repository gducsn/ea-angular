import { TestBed } from '@angular/core/testing';

import { FooterButtonService } from './footer-button.service';

describe('FooterButtonService', () => {
  let service: FooterButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
