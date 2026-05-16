import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria, Esporte, Marca, Produto, ProdutoCor } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService, EsporteService, MarcaService } from '../services';
import { FaixaEtaria, Genero } from '../../shared/enums';
import { ProdutoFiltro } from '../../shared/filters';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manter-produto',
  standalone: false,
  templateUrl: './manter-produto.html',
  styleUrl: './manter-produto.css',
})
export class ManterProduto implements OnInit {
  @ViewChild('formProduto') formProduto!: NgForm;
  novoProduto: boolean = true;
  produto: Produto = new Produto();
  id!: number;
  categorias: Categoria[] = [];
  esportes: Esporte[] = [];
  marcas: Marca[] = [];
  faixasEtarias: FaixaEtaria[] = [];
  generos: Genero[] = [];
  filtroTamanho: ProdutoFiltro = {};

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private esporteService: EsporteService,
    private marcaService: MarcaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.novoProduto = !this.id;

    if (!this.novoProduto) {

    } else {
      this.produto.ativo = true;
      this.adicionarProdutoCor();
    }

    this.inicializaListas();
  }

  inicializaListas() {
    this.categorias = this.categoriaService.listarTodas();
    this.esportes = this.esporteService.listarTodos();
    this.marcas = this.marcaService.listarTodas();
    this.faixasEtarias = Object.values(FaixaEtaria);
    this.generos = Object.values(Genero);
  }

  adicionarProdutoCor() {
    if (this.produto.produtoCores.length >= 20) {
      this.toastr.error('Não é possível adicionar mais. O limite é de 20 cores.', 'Bloqueado', {
        timeOut: 3000
      });
      return;
    }

    this.produto.produtoCores.push(new ProdutoCor());

    if (this.produto.produtoCores.length === 20) {
      this.toastr.warning('Você atingiu o limite máximo de 20 cores para este produto.', 'Limite atingido', {
        timeOut: 4000
      });
    }
  }

  atualizarFiltrosParaTamanho() {
    this.filtroTamanho = {
      generoId: this.produto.genero as any,
      faixaEtariaId: this.produto.faixaEtaria as any,
      categoriaId: this.produto.categoria?.id
    };
  }

  handlerRemoverProdutoCor(event: ProdutoCor) {
    const index = this.produto.produtoCores.indexOf(event);

    if (index !== -1) {
      this.produto.produtoCores.splice(index, 1);
    }
  }
}
