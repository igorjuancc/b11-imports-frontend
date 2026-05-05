import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterProdutoCor } from './manter-produto-cor';

describe('ProdutoCor', () => {
  let component: ManterProdutoCor;
  let fixture: ComponentFixture<ManterProdutoCor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManterProdutoCor],
    }).compileComponents();

    fixture = TestBed.createComponent(ManterProdutoCor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
