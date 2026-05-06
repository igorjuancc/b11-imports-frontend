import { Component, Input } from '@angular/core';
import { ProdutoVariacao } from '../../shared/models';

@Component({
  selector: 'app-variacao-produto',
  standalone: false,
  templateUrl: '/variacao-produto.html',
  styleUrl: './variacao-produto.css',
})
export class VariacaoProduto {
  @Input() variacaoProduto!: ProdutoVariacao;

}
