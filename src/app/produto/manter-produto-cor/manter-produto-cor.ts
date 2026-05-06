import { Component, OnInit } from '@angular/core';
import { Cor, ImagemProduto, ProdutoCor } from '../../shared/models';
import { CorService } from '../services';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-manter-produto-cor',
  standalone: false,
  templateUrl: './manter-produto-cor.html',
  styleUrl: './manter-produto-cor.css',
})
export class ManterProdutoCor implements OnInit {
  readonly TAM_MAX_IMG = 5 * 1024 * 1024;
  readonly NUM_MAX_IMG = 5;

  produtoCor: ProdutoCor = new ProdutoCor();
  cores: Cor[] = [];

  constructor(
    private corService: CorService
  ) { }

  ngOnInit(): void {
    this.cores = this.corService.listarTodas();
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
}
