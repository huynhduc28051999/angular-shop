import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { UserService } from 'shared/services/user.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OrderDetalComponent } from './components/order-detal/order-detal.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetalComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetalComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CategoryService,
    ProductService,
    UserService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
