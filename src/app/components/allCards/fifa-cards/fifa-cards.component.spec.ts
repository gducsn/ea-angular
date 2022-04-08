import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaCardsComponent } from './fifa-cards.component';

describe('FifaCardsComponent', () => {
  let component: FifaCardsComponent;
  let fixture: ComponentFixture<FifaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
