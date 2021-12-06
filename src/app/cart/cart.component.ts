import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = this.cartService.getItems();

  formCheckOut = this.formBuilder.group({
    'name': '',
    'address': '',
  })

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) {
    console.log(this.cartService.getItems());
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.items.forEach((item) => {
      console.log(`${item.name} have send to ${this.formCheckOut.value.name},
    ${this.formCheckOut.value.address}`);
    })

    this.formCheckOut.reset();
  }

}
