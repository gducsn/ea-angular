import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlefieldCardsComponent } from './battlefield-cards.component';

describe('BattlefieldCardsComponent', () => {
  let component: BattlefieldCardsComponent;
  let fixture: ComponentFixture<BattlefieldCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlefieldCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlefieldCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
