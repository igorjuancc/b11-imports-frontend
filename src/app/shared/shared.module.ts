import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, ProductCardComponent, ProductGridComponent } from './components';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { MenuLogo } from './components/menu-logo/menu-logo';
import { CardsCarousel } from './components/cards-carousel/cards-carousel';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    ProductGridComponent,
    ImageCarousel,
    MenuLogo,
    CardsCarousel,
  ],
  imports: [CommonModule, NgbDropdownModule, NgbCarouselModule],
  exports: [
    NavbarComponent, 
    ProductCardComponent, 
    ProductGridComponent, 
    ImageCarousel, 
    MenuLogo,
    CardsCarousel
  ],
})
export class SharedModule {}
