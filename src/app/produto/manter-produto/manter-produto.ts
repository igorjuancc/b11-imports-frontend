import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria, Esporte, Produto } from '../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService, EsporteService } from '../services';

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

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private esporteService: EsporteService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.novoProduto = !this.id;

    if (!this.novoProduto) {
      
    } else {
      
    }

    this.inicializaListas();
  }

  inicializaListas() {
    this.categorias = this.categoriaService.listarTodas();
    this.esportes = this.esporteService.listarTodos();
  }
}
