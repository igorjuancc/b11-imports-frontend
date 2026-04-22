import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  standalone: false,
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGridComponent {
  @Input() produtos: any[] = [];
  @Input() pageSize = 8;

  page = 1;

  get produtosPaginados() {
    const start = (this.page - 1) * this.pageSize;
    return this.produtos.slice(start, start + this.pageSize);
  }
}
