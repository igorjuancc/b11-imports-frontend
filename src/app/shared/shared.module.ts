import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, ProductCardComponent, ProductGridComponent } from './components';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCarousel } from './components/image-carousel/image-carousel';

@NgModule({
  declarations: [NavbarComponent, ProductCardComponent, ProductGridComponent, ImageCarousel],
  imports: [CommonModule, NgbDropdownModule, NgbCarouselModule],
  exports: [NavbarComponent, ProductCardComponent, ProductGridComponent, ImageCarousel],
})
export class SharedModule {}
