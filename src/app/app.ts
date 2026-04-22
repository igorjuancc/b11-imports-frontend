import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b11-imports');

  listaProdutos = [
    {
      nome: 'Produto 1',
      descricao: 'Descrição',
      preco: 99.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição',
      preco: 149.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 3',
      descricao: 'Descrição',
      preco: 99.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 4',
      descricao: 'Descrição',
      preco: 149.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 5',
      descricao: 'Descrição',
      preco: 99.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 6',
      descricao: 'Descrição',
      preco: 149.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 7',
      descricao: 'Descrição',
      preco: 99.9,
      imagem: 'https://acdn-us.mitiendanube.com/stores/001/063/592/products/13541573-264c2b6a1cf90b668a17346365608316-1024-1024.webp'
    },
    {
      nome: 'Produto 8',
      descricao: 'Descrição',
      preco: 149.9,
      imagem: 'https://m.media-amazon.com/images/I/41jQQ+cU5BL._AC_SY300_.jpg'
    }
  ];
}
