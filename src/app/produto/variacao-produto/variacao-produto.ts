import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DadosModalConfirmacao, GradeTamanhoItem, ProdutoVariacao } from '../../shared/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacao } from '../../shared/components';

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
  @Output() removerVariacaoProduto = new EventEmitter<ProdutoVariacao>();

  tamanhoAnterior: GradeTamanhoItem | undefined;

  constructor(
    private modalService: NgbModal
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

  removerVariacao() {    
    const dadosModal: DadosModalConfirmacao = new DadosModalConfirmacao(
      'Excluir Tamanho',
      `Tem certeza que deseja apagar o tamanho ${this.variacaoProduto.tamanho?.tamanho || ''} ?`,
      'Sim',
      'Cancelar'
    );

    const modalRef = this.modalService.open(ModalConfirmacao, {
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.dadosModal = dadosModal;

    modalRef.result.then(
      (result) => {
        if (result === true) {
          this.removerVariacaoProduto.emit(this.variacaoProduto);
        }
      }
    );
  }

}
