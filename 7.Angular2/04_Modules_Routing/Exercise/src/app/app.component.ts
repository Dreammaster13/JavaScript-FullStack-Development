import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='app-component'>
      <app-nav></app-nav>
      <div class='content'>
        <router-outlet></router-outlet>
      </div>
      <footer><div class='footer'>footer</div></footer>
    </div>
  `,
  styles: [``]
})
export class AppComponent {
}
