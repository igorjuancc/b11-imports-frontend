import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariacaoProduto } from './variacao-produto/variacao-produto';
import { ManterProdutoCor } from './manter-produto-cor/manter-produto-cor';
import { ManterProduto } from './manter-produto';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VariacaoProduto, ManterProdutoCor, ManterProduto],
  imports: [
    CommonModule, 
    FormsModule, 
    DragDropModule,
    NgSelectModule,
    NgbTooltipModule
  ]
})
export class ProdutoModule {}
