import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  
      <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
        <span class="text-xl">My book store</span>
        <app-primary-button [lebel]="'Cart (' + cartService.cart().length+')'" (btnClicked)="showButtonClicked()"/>
      </div>
      

  `,
  styles: ``
})
export class HeaderComponent {
  showButtonClicked(){
    console.log("click")
  }
  cartService= inject(CartService)
}


