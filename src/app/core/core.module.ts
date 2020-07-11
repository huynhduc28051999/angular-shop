import { ProductFilterComponent } from './../shopping/components/products/product-filter/product-filter.component';
import { ShoppingModule } from './../shopping/shopping.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsFooterComponent } from './components/bs-footer/bs-footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ProductsHomeComponent } from './components/home/products-home/products-home.component';
import { ProductCartHomeComponent } from './components/home/product-cart-home/product-cart-home.component';

@NgModule({
  declarations: [
    BsFooterComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    CarouselComponent,
    ProductsHomeComponent,
    ProductCartHomeComponent,
  ],
  imports: [
    ShoppingModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    BsNavbarComponent,
    BsFooterComponent
  ]
})
export class CoreModule { }
