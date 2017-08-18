import {Component, OnInit} from '@angular/core';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {CommonActions} from '../../store/common.actions';
import {CarActions} from './car.actions';

import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'app-cars-all',
  template: `
    <div class='sort-control'>
      <button (click)=orderByDateAsc()>Sort by date Ascending</button>
      <button (click)=orderByDateDesc()>Sort by date Descending</button>
      <button (click)=orderByOwnAsc()>Sort by owner Ascending</button>
      <button (click)=orderByOwnDesc()>Sort by owner Descending</button>
    </div>
    <div class='cars-all-card' *ngFor='let car of cars | async'>
      <img class='img' [src]='car.image' [appBoxShadow] />
      <div class='make'>Make: {{car.make}}</div>
      <hr />
      <div class='model'>Model: {{car.model}}</div>
      <hr />
      <a routerLink='/cars/{{car.id}}'>Car Details</a>
    </div>
  `,
  styles: [`
    .cars-all-card {
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

export class CarsAllComponent implements OnInit {
  @select('cars')cars: Observable<Car>;

  constructor(private carActions: CarActions, private commonActions: CommonActions) {
  }

  ngOnInit() {
    console.log('cars all - OnInit');
    this.carActions.getAllCars();
  }

  orderByDateAsc() {
    console.log('cars all - order by date ascending');
    this.commonActions.orderByDateAsc('cars');
  }

  orderByDateDesc() {
    console.log('cars all - order by date descending');
    this.commonActions.orderByDateDesc('cars');
  }

  orderByOwnAsc() {
    console.log('cars all - order by owner ascending');
    this.commonActions.orderByOwner('ascending');
  }

  orderByOwnDesc() {
    console.log('cars all - order by owner ascending');
    this.commonActions.orderByOwner('descending');
  }
}
