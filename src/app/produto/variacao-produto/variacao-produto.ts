import { Component, Input, OnInit } from '@angular/core';
import { GradeTamanhoItem, Produto, ProdutoVariacao } from '../../shared/models';
import { GradeTamanhoItemService } from '../services';

@Component({
  selector: 'app-variacao-produto',
  standalone: false,
  templateUrl: '/variacao-produto.html',
  styleUrl: './variacao-produto.css',
})
export class VariacaoProduto implements OnInit {
  @Input() variacaoProduto!: ProdutoVariacao;
  @Input() tamanhosDisponiveis!: GradeTamanhoItem[];

  constructor(
    private gradeTamanhoItemService: GradeTamanhoItemService
  ) { }

  ngOnInit(): void {
    /*
    if (this.variacaoProduto.produtoCor?.produto) {
      this.buscarTamanhos(this.variacaoProduto.produtoCor.produto);
    } 
      */   
  }
  /**
   * O botão adicionar novo tamanho so vai aparecer apos preencher
   * categoria, genero e faixa etaria
   * Por que a grade de tamnanho vai trazer dados de p, m e g 
   * de adulto ou crianca e existe diferenca do tamanho para homem 
   * e mulher
   * 
   * No formulario de tamanho de produto so vai exibir quando tiver todos
   * os dados preenchido, pois no on-init vai usar pra buscar a grade para
   * o produto em si.
   * 
   * Se modificar genero, perfil ou categoria e ja existir variações preenchi
   * das cores, avisar pq vai resetar todos os tamanhos, deixar em default
   * para não salvar. (não vai precisar apagar)
   * 
   */

  /**
   * 
   * Esse erro ocorre porque, ao usar o *ngFor 
   * para renderizar várias cores ou variações, 
   * você provavelmente fixou um id="nome" ou algo genérico no HTML. 
   * Quando o navegador vê 5 campos com o mesmo ID, 
   * ele se perde no preenchimento automático.
   * Aqui estão as formas de resolver isso no Angular:
   * 
   */

  buscarTamanhos(produto: Produto) {
    /*
     * Usar um escutador, toda vez que tiver uma mudança nos itens de produto
     * (genero, categoria e perfil) fazer uma nova busca na base de dados
     * limpar todos os selecionados (colocar o default) e disponibilizar
     * a nova lista
     */
    this.tamanhosDisponiveis = this.gradeTamanhoItemService.listarTodos();
  }

}
