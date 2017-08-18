import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

import {Car} from '../../interfaces/car';

@Component({
  selector: 'app-cars-all',
  template: `
    <div class='sort-control'>
      <button (click)=orderByDateAsc()>Sort by date Ascending</button>
      <button (click)=orderByDateDesc()>Sort by date Descending</button>
      <button (click)=orderByOwnAsc()>Sort by owner Ascending</button>
      <button (click)=orderByOwnDesc()>Sort by owner Descending</button>
    </div>
    <div class='cars-all-card' *ngFor='let car of cars'>
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
  cars: Array<Car>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService
      .getCarsAll()
      .then((data) => {
        this.cars = data;
      })
      .catch(err => console.log(err));
  }

  orderByDateAsc() {
    this.cars.sort((a, b) => +a.createdOn - +b.createdOn);  // + will parse to Number
  }

  orderByDateDesc() {
    this.cars.sort((a, b) => +b.createdOn - +a.createdOn);  // + will parse to Number
  }

  orderByOwnAsc() {
    this.cars.sort((a, b) => a.owner.localeCompare(b.owner));
  }

  orderByOwnDesc() {
    this.cars.sort((a, b) => b.owner.localeCompare(a.owner));
  }
}
