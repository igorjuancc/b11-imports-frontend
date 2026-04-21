import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, NavbarComponent, ProductCardComponent, ProductGridComponent } from './components';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavbarComponent,
    ProductCardComponent,
    ProductGridComponent,
    CarouselComponent],
  imports: [CommonModule,
    NgbDropdownModule,
    NgbCarouselModule],
  exports: [NavbarComponent,
    ProductCardComponent,
    ProductGridComponent,
    CarouselComponent]
})
export class SharedModule { }
