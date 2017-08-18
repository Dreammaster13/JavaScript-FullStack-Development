import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  template: `
    <div class='home-car-card' *ngFor='let car of cars'>
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
  cars: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService
      .getCarsAll()
      .then((data) => {
        this.cars = data;
        let cars = this.cars;
        cars = cars.slice(0, 6).sort((a, b) => b.createdOn - a.createdOn);
        this.cars = cars;
      })
      .catch(err => console.log(err));
  }
}
