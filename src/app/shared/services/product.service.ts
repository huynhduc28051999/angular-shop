import { Product } from 'shared/models/product';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<Product[]>{
    return this.db.list('/products');
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
