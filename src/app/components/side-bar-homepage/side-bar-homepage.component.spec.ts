import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarHomepageComponent } from './side-bar-homepage.component';

describe('SideBarHomepageComponent', () => {
  let component: SideBarHomepageComponent;
  let fixture: ComponentFixture<SideBarHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
