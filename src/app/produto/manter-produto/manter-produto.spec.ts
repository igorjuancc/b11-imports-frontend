import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterProduto } from './manter-produto';

describe('ManterProduto', () => {
  let component: ManterProduto;
  let fixture: ComponentFixture<ManterProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManterProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(ManterProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
