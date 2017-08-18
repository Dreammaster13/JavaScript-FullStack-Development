import {Component, OnInit} from '@angular/core';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {CommonActions} from '../../store/common.actions';
import {OwnerActions} from './owner.actions';

import {Owner} from '../../interfaces/owner.interface';

@Component({
  selector: 'app-owners-all',
  template: `
    <div class='sort-control'>
      <button (click)=orderByNameAsc()>Sort by name Ascending</button>
      <button (click)=orderByNameDesc()>Sort by name Descending</button>
    </div>
    <div class='owners-all-card' *ngFor='let owner of owners | async'>
      <img class='img' [src]='owner.image' [appBoxShadow] />
      <div>Name: {{owner.name}}</div>
      <hr />
      <a routerLink='/owners/{{owner.id}}'>Owner Details</a>
    </div>
  `,
  styles: [`
    .owners-all-card {
      width: 70%;
      padding: 15px;
      margin: 25px;
      border: solid 2px gray;
      overflow: hidden;
      font-size: 18px;
    }
    .img {
      width: 60%;
      float: left;
      margin: 30px;
      border-radius: 25px;
    }
    .sort-control {
      margin: 25px;
      display: flex;
      justify-content: space-around;
      width: 70%;
    }
  `]
})

export class OwnersAllComponent implements OnInit {
  @select('owners')owners: Observable<Owner>;

  constructor(private ownerActions: OwnerActions, private commonActions: CommonActions) {
  }

  ngOnInit() {
    this.ownerActions.getOwnersAll();
  }

  orderByNameAsc() {
    this.commonActions.orderByName('ascending');
  }

  orderByNameDesc() {
    this.commonActions.orderByName('descending');
  }
}
