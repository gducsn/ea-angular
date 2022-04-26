import { TestBed } from '@angular/core/testing';

import { NavbarCardsService } from './navbar-cards.service';

describe('NavbarCardsService', () => {
  let service: NavbarCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
