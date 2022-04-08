import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaplayCardsComponent } from './eaplay-cards.component';

describe('EaplayCardsComponent', () => {
  let component: EaplayCardsComponent;
  let fixture: ComponentFixture<EaplayCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaplayCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaplayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
