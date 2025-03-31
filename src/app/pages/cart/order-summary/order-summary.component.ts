import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../commponenets/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
    <h2 class="text-xl">Order Summary</h2>
    <div class="flex gap-4" >
      <div class="flex gap-4 mt-2">
        <span class="text-lg">Total:</span>
        <span class="text-lg font-bold">{{total() + '€'}}</span>
      </div>  
    </div>
    <app-primary-button  lebel="Proceed to checkout"/>
  </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {


  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
        total += item.price;
    }
    return total.toFixed(2); // Επιστρέφει τη συνολική τιμή με 2 δεκαδικά
});


}
