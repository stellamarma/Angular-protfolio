import { Component } from '@angular/core';
import { HeaderComponent } from './commponenets/header/header.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `
    <app-header />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
