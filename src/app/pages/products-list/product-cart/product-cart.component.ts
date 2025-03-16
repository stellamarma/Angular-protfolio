import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../commponenets/primary-button/primary-button.component";

@Component({
  selector: 'app-product-cart',
  imports: [PrimaryButtonComponent],
  template: `
      <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative ">
        <div class="mx-auto">
          <img [src]="product().image" class="w-[200] h-[100px] object-contain"/>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{product().title}}</span>
          <span class="text-md font-bold">{{product().writer}}</span>
          <span class="text-sm ">{{product().price + '€'}} </span>
          <app-primary-button lebel="Add to Cart" class="mt-3"/>
        
          <span class="absolute top-2 right-3 text-sm font-bold"
           [class]="product().stock ? 'text-green-500' : 'text-red-500'">
            @if (product().stock){
              {{product().stock }} left
            }@else {
              Out of stock
            }
          </span>
        
        </div>
      </div>

  `,
  styles: ``
})
export class ProductCartComponent {

  product=input.required<Product>();

}
