import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
  <button class="text-black px-5 py-2 rounded-xl shadow-md bg-white transition hover:bg-gray-100 w-32" (click)="btnClicked.emit()">
      {{lebel()}}
  </button>
  `,
  styles: ``
})
export class ButtonComponent {
  lebel=input('');

  btnClicked=output();
}
