# Mystore

anguar store

这是一个angular 商店入门教程源码。

主要实现了一个购物车，包括工具栏，商品列表页，详情页，购物车服务，购物车组件，异步获取远程价格信息。

- angular 基本用法
- 父子组件传递内容
- 路由
- 自定义事件
- 表单提交
- httpclient使用等


[教程](https://angular.cn/start)

## environment
安装angular，nvm，生成mystore项目
```
zhh@/Users/zhh/git $ npm install -g @angular/cli
...
+ @angular/cli@13.0.4

zhh@/Users/zhh/git $ ng new mystore

zhh@/Users/zhh/git/mystore $ npm -v
6.14.15
zhh@/Users/zhh/git/mystore $ node -v
v14.17.6
zhh@/Users/zhh/git/mystore $ nvm ls
       v10.19.0
       v12.16.1
->     v14.17.6
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
`--open` or `-o` will open a browser automatically.

## Code scaffolding

```bash
zhh@/Users/zhh/git/mystore $ ng generate component products-list
CREATE src/app/products-list/products-list.component.css (0 bytes)
CREATE src/app/products-list/products-list.component.html (28 bytes)
CREATE src/app/products-list/products-list.component.spec.ts (669 bytes)
CREATE src/app/products-list/products-list.component.ts (302 bytes)
UPDATE src/app/app.module.ts (501 bytes)
zhh@/Users/zhh/git/mystore $ ng generate component product-alert
CREATE src/app/product-alert/product-alert.component.css (0 bytes)
CREATE src/app/product-alert/product-alert.component.html (28 bytes)
CREATE src/app/product-alert/product-alert.component.spec.ts (669 bytes)
CREATE src/app/product-alert/product-alert.component.ts (302 bytes)
UPDATE src/app/app.module.ts (609 bytes)
zhh@/Users/zhh/git/mystore $
zhh@/Users/zhh/git/mystore $ ng generate component product-details
CREATE src/app/product-details/product-details.component.css (0 bytes)
CREATE src/app/product-details/product-details.component.html (30 bytes)
CREATE src/app/product-details/product-details.component.spec.ts (683 bytes)
CREATE src/app/product-details/product-details.component.ts (310 bytes)
UPDATE src/app/app.module.ts (889 bytes)
zhh@/Users/zhh/git/mystore $ ng generate service cart
CREATE src/app/cart.service.spec.ts (347 bytes)
CREATE src/app/cart.service.ts (133 bytes)
zhh@/Users/zhh/git/mystore $ ng generate component cart
CREATE src/app/cart/cart.component.css (0 bytes)
CREATE src/app/cart/cart.component.html (19 bytes)
CREATE src/app/cart/cart.component.spec.ts (612 bytes)
CREATE src/app/cart/cart.component.ts (267 bytes)
UPDATE src/app/app.module.ts (1013 bytes)
zhh@/Users/zhh/git/mystore $ ng generate component topbar
CREATE src/app/topbar/topbar.component.css (0 bytes)
CREATE src/app/topbar/topbar.component.html (21 bytes)
CREATE src/app/topbar/topbar.component.spec.ts (626 bytes)
CREATE src/app/topbar/topbar.component.ts (275 bytes)
UPDATE src/app/app.module.ts (1144 bytes)
zhh@/Users/zhh/git/mystore $ ng generate component shipping
CREATE src/app/shipping/shipping.component.css (0 bytes)
CREATE src/app/shipping/shipping.component.html (23 bytes)
CREATE src/app/shipping/shipping.component.spec.ts (640 bytes)
CREATE src/app/shipping/shipping.component.ts (283 bytes)
UPDATE src/app/app.module.ts (1313 bytes)

```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
