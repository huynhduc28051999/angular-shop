import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminModule { }
