import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../commponenets/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center">
    <!-- Εικόνα προϊόντος -->
    <img [src]="item().image" class="w-16 h-16 sm:w-20 sm:h-20 object-contain">

    <!-- Πληροφορίες προϊόντος -->
    <div class="flex flex-col text-center sm:text-left">
      <span class="text-md font-bold">{{ item().title }}</span>
      <span class="text-sm">{{ '€ ' + item().price.toFixed(2) }}</span>
    </div>

    <!-- Κουμπί αφαίρεσης -->
    <div class="w-full sm:w-auto flex justify-center sm:justify-end">
      <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)"/>
    </div>
  </div>
  `,
  styles: ``
})
export class CartItemComponent {
  
  cartService = inject(CartService);
  item = input.required<Product>();
}

