import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariacaoProduto } from './variacao-produto';

describe('VariacaoProduto', () => {
  let component: VariacaoProduto;
  let fixture: ComponentFixture<VariacaoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariacaoProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(VariacaoProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
