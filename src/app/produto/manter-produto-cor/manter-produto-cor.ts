import { Component, OnInit } from '@angular/core';
import { Cor, ProdutoCor } from '../../shared/models';
import { CorService } from '../services';

@Component({
  selector: 'app-manter-produto-cor',
  standalone: false,
  templateUrl: './manter-produto-cor.html',
  styleUrl: './manter-produto-cor.css',
})
export class ManterProdutoCor implements OnInit {
  produtoCor: ProdutoCor = new ProdutoCor();
  cores: Cor[] = [];

  constructor(
    private corService: CorService
  ) {}

  ngOnInit(): void {
    this.cores = this.corService.listarTodas();
  }
  
}
