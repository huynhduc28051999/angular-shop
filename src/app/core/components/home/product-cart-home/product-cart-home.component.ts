import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-cart-home',
  templateUrl: './product-cart-home.component.html',
  styleUrls: ['./product-cart-home.component.css']
})
export class ProductCartHomeComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-carts') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
