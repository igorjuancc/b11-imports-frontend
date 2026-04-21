import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductGrid } from './shared/components/product-grid/product-grid';
import { ProductCard } from './shared/components/product-card/product-card';
import { Navbar } from './shared/components/navbar/navbar';
import { Carousel } from './shared/components/carousel/carousel';

@NgModule({
  declarations: [App, ProductGrid, ProductCard, Navbar, Carousel],
  imports: [BrowserModule, AppRoutingModule, NgbDropdownModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
