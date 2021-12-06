import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    //find product
    this.product = products.find(p => p.id === productId);

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    //window.alert(`Product ${product.name} added successfully`);
    console.log(`Product ${product.name} added successfully`);
    console.log(this.cartService.getItems());
  }

}
