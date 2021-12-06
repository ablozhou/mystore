import { Component, OnInit } from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {
  }

  share(p:Product):void{
    alert('Product shared:'+p.name)
  }

  onNotify(p:Product):void {
    alert("alert price:"+p.name)
  }
}
