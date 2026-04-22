import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  menus = [
    {
      nome: 'Chuteira Campo',
      itens: ['Adidas', 'Nike', 'Mizuno', 'Puma', 'Asics']
    },
    {
      nome: 'Chuteira Society',
      itens: ['Adidas', 'Nike', 'Mizuno', 'Puma', 'Asics']
    },
    {
      nome: 'Chuteira Futsal',
      itens: ['Adidas', 'Nike', 'Mizuno', 'Puma', 'Asics']
    },
    {
      nome: 'Luvas',
      itens: ['Nike', 'Adidas']
    }
  ];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
