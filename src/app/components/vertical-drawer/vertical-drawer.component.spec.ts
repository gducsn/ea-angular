import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDrawerComponent } from './vertical-drawer.component';

describe('VerticalDrawerComponent', () => {
  let component: VerticalDrawerComponent;
  let fixture: ComponentFixture<VerticalDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
