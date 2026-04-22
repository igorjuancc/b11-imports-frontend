import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogo } from './menu-logo';

describe('MenuLogo', () => {
  let component: MenuLogo;
  let fixture: ComponentFixture<MenuLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
