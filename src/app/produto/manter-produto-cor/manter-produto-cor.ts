import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cor, GradeTamanhoItem, ImagemProduto, ProdutoCor, ProdutoVariacao } from '../../shared/models';
import { CorService, GradeTamanhoItemService } from '../services';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProdutoFiltro } from '../../shared/filters';

@Component({
  selector: 'app-manter-produto-cor',
  standalone: false,
  templateUrl: './manter-produto-cor.html',
  styleUrl: './manter-produto-cor.css',
})
export class ManterProdutoCor implements OnInit {
  @Input() produtoCor!: ProdutoCor;
  @Input() filtroTamanho!: ProdutoFiltro;

  tamanhosDisponiveis: GradeTamanhoItem[] = [];
  mensagensAviso: string[] = [];

  readonly TAM_MAX_IMG = 5 * 1024 * 1024;
  readonly NUM_MAX_IMG = 5;

  cores: Cor[] = [];

  constructor(
    private corService: CorService,
    private gradeTamanhoItemService: GradeTamanhoItemService
  ) { }

  ngOnInit(): void {
    this.cores = this.corService.listarTodas();
    this.buscarTamanhosDisponiveisFiltro();

    if (!this.produtoCor.id) {
      this.adicionarVariacaoProduto();
    }
  }

  uploadImagem(input: HTMLInputElement): void {
    const files = input.files;

    if (files) {
      for (let file of files) {
        if (this.produtoCor.imagens.length >= this.NUM_MAX_IMG) {
          alert(`Limite de ${this.NUM_MAX_IMG} imagens atingido.`);
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
      console.error(error.message);
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
    this.produtoCor.variacoes.push(new ProdutoVariacao);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtroTamanho'] && !changes['filtroTamanho'].firstChange) {
      this.buscarTamanhosDisponiveisFiltro();
      this.limparTamanhosDeVariacoes();
    }
  }

  buscarTamanhosDisponiveisFiltro() {
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
      const nomeA = a.tamanho ?? '';
      const nomeB = b.tamanho ?? '';
      return nomeA.localeCompare(nomeB);
    });
  }
}
