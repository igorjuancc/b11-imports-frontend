import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from '../../shared/models';

@Component({
  selector: 'app-manter-produto',
  standalone: false,
  templateUrl: './manter-produto.html',
  styleUrl: './manter-produto.css',
})
export class ManterProduto {
  @ViewChild('formProduto') formProduto!: NgForm;
  novoProduto: boolean = true;
  produto: Produto = new Produto();

}
