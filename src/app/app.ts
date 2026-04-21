import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b11-imports');

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  listaProdutos = [
    {
      nome: 'Produto 1',
      descricao: 'Descrição',
      preco: 99.9,
      imagem: 'https://via.placeholder.com/300'
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição',
      preco: 149.9,
      imagem: 'https://via.placeholder.com/300'
    }
  ];
}
