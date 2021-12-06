import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    // this.items.forEach( (item, index) => {
    //   if(item === product) this.items.splice(index,1);
    // });
    let index = this.items.indexOf(product, 0);
    //let index = this.items.findIndex(d => d.id === product.id);
    this.items.splice(index, 1);

  }

  clearCart() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getShippingPrice() {
    return this.http.get<{ type: string, price: number }[]>('assets/shipping.json');
  }
}
