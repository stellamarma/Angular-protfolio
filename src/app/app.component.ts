import { Component } from '@angular/core';
import { HeaderComponent } from './commponenets/header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
