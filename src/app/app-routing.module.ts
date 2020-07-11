import { OrderDetalComponent } from './shared/components/order-detal/order-detal.component';
import { ProductFormComponent } from './admin/Components/product-form/product-form.component';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/Components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/Components/admin-orders/admin-orders.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      // { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      { path: 'order-success/:id', component:OrderSuccessComponent, canActivate: [AuthGuardService]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},

      { path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'order-detal/:id',
        component: OrderDetalComponent,
        // canActivate: [AuthGuardService, AdminAuthGuardService]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
