import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pwa works!';
}
