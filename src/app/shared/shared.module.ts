import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, ProductCardComponent, ProductGridComponent } from './components';
import { NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavbarComponent,
    ProductCardComponent,
    ProductGridComponent,
    ],
  imports: [CommonModule,
    NgbDropdownModule,
    NgbCarouselModule],
  exports: [NavbarComponent,
    ProductCardComponent,
    ProductGridComponent,
    ]
})
export class SharedModule { }
