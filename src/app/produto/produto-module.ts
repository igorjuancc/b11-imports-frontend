import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariacaoProduto } from './variacao-produto/variacao-produto';
import { ProdutoCor } from './produto-cor/produto-cor';
import { ManterProduto } from './manter-produto';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [VariacaoProduto, ProdutoCor, ManterProduto],
  imports: [CommonModule, FormsModule, NgSelectModule]
})
export class ProdutoModule {}
