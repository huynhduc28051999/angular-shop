import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductFilterComponent,
  ]
})
export class ShoppingModule { }
