import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManterProduto } from './produto/manter-produto';
import { Home } from './home';

const routes: Routes = [ 
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },

  {
    path: 'produtos/novo',
    component: ManterProduto
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
