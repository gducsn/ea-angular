import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexCardsComponent } from './apex-cards.component';

describe('ApexCardsComponent', () => {
  let component: ApexCardsComponent;
  let fixture: ComponentFixture<ApexCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
