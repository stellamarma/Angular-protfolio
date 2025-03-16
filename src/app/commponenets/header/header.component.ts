import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  
      <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
        <span class="text-xl">My book store</span>
        <app-primary-button lebel="Cart" (btnClicked)="showButtonClicked()"/>
      </div>
      

  `,
  styles: ``
})
export class HeaderComponent {
  showButtonClicked(){
    console.log("click")
  }

}


