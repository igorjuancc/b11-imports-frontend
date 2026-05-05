import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCor } from './produto-cor';

describe('ProdutoCor', () => {
  let component: ProdutoCor;
  let fixture: ComponentFixture<ProdutoCor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoCor],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoCor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
