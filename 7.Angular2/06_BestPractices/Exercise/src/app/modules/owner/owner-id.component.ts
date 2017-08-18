import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {OwnerActions} from './owner.actions';

import {Owner} from '../../interfaces/owner.interface';

@Component({
  selector: 'app-owner-id',
  template: `
    <div class='owners-all-card'>
      <div *ngFor='let owner of owners | async'>
        <img class='img' [src]='owner.image' [appBoxShadow] />
        <div>Name: {{owner.name}}</div>
        <hr />
        <div>Cars owned: {{owner.carsOwned}}</div>

        <a routerLink='/owners/edit/{{owner.id}}'>Edit Owner</a>
      </div>
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
  `]
})

export class OwnerIdComponent implements OnInit {
  @select('owners')owners: Observable<Owner>;
  id: any;

  constructor(
    private ownerActions: OwnerActions,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ownerActions.getOwnerById(this.id);
  }
}
