import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() tamanhosDisponiveis: GradeTamanhoItem[] = [];
  @Output() tamanhoAlterado = new EventEmitter<{ anterior: GradeTamanhoItem | undefined, novo: GradeTamanhoItem }>();

  tamanhoAnterior: GradeTamanhoItem | undefined;

  constructor(
    private gradeTamanhoItemService: GradeTamanhoItemService
  ) { }

  ngOnInit(): void {

  }

  setTamanhoAnterior(tamanho: GradeTamanhoItem | undefined) {
    this.tamanhoAnterior = tamanho;
  }

  onTamanhoChange(novoTamanho: GradeTamanhoItem) {
    this.tamanhoAlterado.emit({
      anterior: this.tamanhoAnterior,
      novo: novoTamanho
    });
    this.tamanhoAnterior = novoTamanho;
  }

}
