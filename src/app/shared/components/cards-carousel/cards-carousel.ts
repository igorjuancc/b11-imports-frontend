import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-carousel',
  standalone: false,
  templateUrl: './cards-carousel.html',
  styleUrl: './cards-carousel.css',
})
export class CardsCarousel implements OnInit {
  @Input() produtos: any[] = []; 
  gruposDeProdutos: any[][] = [];
  pageSize = 4;

  ngOnInit() {
    this.agruparProdutos();
  }

  agruparProdutos() {
    if (this.produtos && this.produtos.length > 0) {
      this.gruposDeProdutos = [];
      for (let i = 0; i < this.produtos.length; i += this.pageSize) {
        this.gruposDeProdutos.push(this.produtos.slice(i, i + this.pageSize));
      }
    }
  }
}
