import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared.module';
import { Home } from './home';
import { ProdutoModule } from './produto/produto-module';

@NgModule({
  declarations: [App, Home],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProdutoModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
