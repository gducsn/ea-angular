import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1CardsComponent } from './f1-cards.component';

describe('F1CardsComponent', () => {
  let component: F1CardsComponent;
  let fixture: ComponentFixture<F1CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1CardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
