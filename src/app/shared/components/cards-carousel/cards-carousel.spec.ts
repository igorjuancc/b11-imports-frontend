import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarousel } from './cards-carousel';

describe('CardsCarousel', () => {
  let component: CardsCarousel;
  let fixture: ComponentFixture<CardsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
