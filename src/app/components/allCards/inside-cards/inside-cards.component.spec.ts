import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCardsComponent } from './inside-cards.component';

describe('InsideCardsComponent', () => {
  let component: InsideCardsComponent;
  let fixture: ComponentFixture<InsideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
