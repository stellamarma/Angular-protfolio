import { Component } from '@angular/core';
import { HeaderComponent } from './commponenets/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `
    <app-header />
    <app-products-list />

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
