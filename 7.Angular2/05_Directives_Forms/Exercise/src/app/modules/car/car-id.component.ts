import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

import {Car} from '../../interfaces/car';

@Component({
  selector: 'app-car-id',
  templateUrl: './car-id.component.html',
  styles: [`
    .car-id-card {
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

    .comments-block {
      background-color: antiquewhite;
      display: inline-block;
      padding: 0 20px;
    }
  `]
})

export class CarIdComponent implements OnInit {
  car: Car;
  id: any;
  newComment: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.car = new Car();
    this.id = this.route.snapshot.paramMap.get('id');
    this.newComment = '';
  }

  ngOnInit() {
    this.dataService
      .getCarById(this.id)
      .then((data) => {
        this.car = data;
      })
      .catch(err => console.log(err));
  }

  commentCar() {
    this.dataService
      .pushSingleComment(this.car.id, this.newComment)
      .then((data) => {
        this.car = data;
      })
      .catch((err) => {
        console.log(err);
      });

    this.newComment = '';
  }
}
