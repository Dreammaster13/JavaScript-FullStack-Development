import {Component, OnInit} from '@angular/core';
import {CarActions} from '../car/car.actions';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'app-home',
  template: `
    <div class='home-car-card' *ngFor='let car of cars | async'>
      <img class='img' [src]='car.image' [appBoxShadow] />
      <div class='make'>Make: {{car.make}}</div>
      <hr />
      <div class='model'>Model: {{car.model}}</div>
      <hr />
      <a routerLink='cars/{{car.id}}'>Car Details</a>
    </div>
  `,
  styles: [`
    .home-car-card {
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

export class HomeComponent implements OnInit {
  @select('cars') cars: Observable<Car>;

  constructor(private carActions: CarActions) {
  }

  ngOnInit() {
    console.log('home component - OnInit()');
    this.carActions.getHomeCars();
  }
}
