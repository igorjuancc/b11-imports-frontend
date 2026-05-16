import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cor, DadosModalConfirmacao, GradeTamanhoItem, ImagemProduto, ProdutoCor, ProdutoVariacao } from '../../shared/models';
import { CorService, GradeTamanhoItemService } from '../services';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProdutoFiltro } from '../../shared/filters';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacao } from '../../shared/components';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manter-produto-cor',
  standalone: false,
  templateUrl: './manter-produto-cor.html',
  styleUrl: './manter-produto-cor.css',
})
export class ManterProdutoCor implements OnInit, OnDestroy {
  @Input() produtoCor!: ProdutoCor;
  @Input() filtroTamanho!: ProdutoFiltro;
  @Output() removerProdutoCor = new EventEmitter<ProdutoCor>();

  tamanhosDisponiveis: GradeTamanhoItem[] = [];
  mensagensAviso: string[] = [];
  maxTamanhosDisponiveis: number = 0;

  readonly TAM_MAX_IMG = 5 * 1024 * 1024;
  readonly NUM_MAX_IMG = 5;

  cores: Cor[] = [];

  constructor(
    private corService: CorService,
    private gradeTamanhoItemService: GradeTamanhoItemService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cores = this.corService.listarTodas();
    this.buscarTamanhosDisponiveisFiltro();
  }

  ngOnDestroy(): void {
    if (this.produtoCor?.imagens?.length) {
      this.produtoCor.imagens.forEach(imagem => {
        if (imagem.link) {
          URL.revokeObjectURL(imagem.link);
        }
      });
    }
  }

  uploadImagem(input: HTMLInputElement): void {
    const files = input.files;

    if (files) {
      for (let file of files) {
        if (this.produtoCor.imagens.length >= this.NUM_MAX_IMG) {
          this.toastr.error(`Limite de ${this.NUM_MAX_IMG} imagens atingido.`, 'Bloqueado', {
            timeOut: 8000
          });
          return;
        }

        this.adicionarImagem(file);
      }
    }

    input.value = '';
  }

  private adicionarImagem(file: File): void {
    try {
      const novaImagemProduto = this.criarImagemProduto(file);
      this.produtoCor.imagens.push(novaImagemProduto);
    } catch (error: any) {
      this.toastr.error(error.message, 'Falha no Arquivo', {
        timeOut: 4000
      });
    }
  }

  private criarImagemProduto(imagemFile: File): ImagemProduto {
    if (!imagemFile) {
      throw new Error('O arquivo de imagem é obrigatório.');
    }

    if (!imagemFile.type.startsWith('image/')) {
      throw new Error(`O arquivo "${imagemFile.name}" não é uma imagem válida.`);
    }

    if (imagemFile.size > this.TAM_MAX_IMG) {
      throw new Error(`A imagem "${imagemFile.name}" excede o limite de 5MB.`);
    }

    const novaImagemProduto = new ImagemProduto();

    novaImagemProduto.file = imagemFile;
    novaImagemProduto.link = URL.createObjectURL(imagemFile);
    novaImagemProduto.ordem = this.produtoCor.imagens.length + 1;

    return novaImagemProduto;
  }

  removerImagem(index: number): void {
    const imagem = this.produtoCor.imagens[index];

    if (imagem.link) {
      URL.revokeObjectURL(imagem.link);
    }

    this.produtoCor.imagens.splice(index, 1);
    this.reordenarImagens();
  }

  private reordenarImagens(): void {
    this.produtoCor.imagens.forEach((img, index) => {
      img.ordem = index + 1;
    });
  }

  drop(event: CdkDragDrop<ImagemProduto[]>): void {
    moveItemInArray(this.produtoCor.imagens, event.previousIndex, event.currentIndex);
    this.reordenarImagens();
  }

  adicionarVariacaoProduto() {
    if (this.produtoCor.variacoes.length >= this.maxTamanhosDisponiveis) {
      this.toastr.error(`Não é possível adicionar mais tamanhos. O limite é de ${this.maxTamanhosDisponiveis}.`, 'Bloqueado', {
        timeOut: 8000
      });
      return;
    }

    this.produtoCor.variacoes.push(new ProdutoVariacao);

    if (this.produtoCor.variacoes.length === this.maxTamanhosDisponiveis) {
      this.toastr.warning(`Você atingiu o limite máximo de tamanhos (${this.maxTamanhosDisponiveis}) para este produto.`, 'Limite atingido', {
        timeOut: 8000
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtroTamanho'] && !changes['filtroTamanho'].firstChange) {
      this.buscarTamanhosDisponiveisFiltro();
      this.limparTamanhosDeVariacoes();
    }
  }

  buscarTamanhosDisponiveisFiltro() {
    this.tamanhosDisponiveis = [];
    this.mensagensAviso = [];
    let realizarBusca: boolean = true;

    if (!this.filtroTamanho.categoriaId) {
      this.mensagensAviso.push("Necessário preencher a categoria do produto");
      realizarBusca = false;
    }
    if (!this.filtroTamanho.faixaEtariaId) {
      this.mensagensAviso.push("Necessário preencher o perfil do produto");
      realizarBusca = false;
    }
    if (!this.filtroTamanho.generoId) {
      this.mensagensAviso.push("Necessário preencher genêro do produto");
      realizarBusca = false;
    }

    if (realizarBusca) {
      this.tamanhosDisponiveis = this.gradeTamanhoItemService.listarTodos();
    }

    this.maxTamanhosDisponiveis = this.tamanhosDisponiveis.length;
  }

  private limparTamanhosDeVariacoes() {
    this.produtoCor.variacoes.forEach(variacao => {
      variacao.tamanho = undefined;
    });
  }

  handleTamanhoAlterado(event: { anterior: GradeTamanhoItem | undefined, novo: GradeTamanhoItem }) {
    let listaAtualizada = [...this.tamanhosDisponiveis];

    if (event.anterior) {
      listaAtualizada.push(event.anterior);
    }

    if (event.novo) {
      listaAtualizada = listaAtualizada.filter(t => t.id !== event.novo.id);
    }

    this.tamanhosDisponiveis = listaAtualizada;
    this.ordenarTamanhosDisponiveis();
  }


  private ordenarTamanhosDisponiveis(): void {
    this.tamanhosDisponiveis.sort((a, b) => {
      const ordemA = a.ordem ?? 0;
      const ordemB = b.ordem ?? 0;
      return ordemA - ordemB;
    });
  }

  handleRemoverVariacaoProduto(event: ProdutoVariacao) {
    const index = this.produtoCor.variacoes.indexOf(event);

    if (index !== -1) {
      this.produtoCor.variacoes.splice(index, 1);

      if (event.tamanho) {
        this.handleTamanhoAlterado({
          anterior: event.tamanho,
          novo: undefined as any
        });
      }
    }
  }

  removerCor() {
    const dadosModal: DadosModalConfirmacao = new DadosModalConfirmacao(
      'Excluir cor',
      `Tem certeza que deseja apagar o produto de cor ${this.produtoCor.corPrincipal?.nome || ''} ?`,
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
          this.removerProdutoCor.emit(this.produtoCor);
        }
      }
    );
  }
}
