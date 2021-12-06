// Input accept data
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  // 因为接口B里面name被定义为可空的值，但是实际情况是不为空的，
  // 那么我们就可以通过在class里面使用！，重新强调了name这个不为空值
  // class A implemented B {
  //   name!: string
  // }

  // interface B {
  //   name?: string
  // }
  //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent
  // "product!" means not null.
  @Input() product!: Product;
  //Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  // 使用 EventEmitter 自定义事件
  // 该指令创建一个 EventEmitter 并将其对外暴露为属性。
  // 然后，该指令调用 EventEmitter.emit(data) 发出事件，传入消息数据，该消息数据可以是任何东西。
  // 父指令通过绑定到该属性来监听事件，并通过传入的 $event 对象接收数据。
  @Output() notify: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
