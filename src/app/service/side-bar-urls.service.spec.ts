import { TestBed } from '@angular/core/testing';

import { SideBarUrlsService } from './side-bar-urls.service';

describe('SideBarUrlsService', () => {
  let service: SideBarUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
