import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul>
      <li>
        <a routerLink='/'>Home</a>
      </li>
      <li>
        <a routerLink='/cars/all'>All Cars</a>
      </li>
      <li>
        <a routerLink='/owners/all'>All Owners</a>
      </li>
    </ul>
  `,
  styles: [`
    li {
      display: inline-block;
      padding: 5px 15px;
      margin: 5px 15px;
    }
  `]
})

export class NavComponent {

}
