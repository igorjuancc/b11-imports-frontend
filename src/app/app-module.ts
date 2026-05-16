import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared.module';
import { Home } from './home';
import { ProdutoModule } from './produto/produto-module';

@NgModule({
  declarations: [App, Home],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    ProdutoModule,
    ToastrModule.forRoot({ 
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
