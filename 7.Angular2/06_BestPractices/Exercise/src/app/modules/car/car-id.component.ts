import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {CarActions} from './car.actions';

import {Car} from '../../interfaces/car.interface';

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
  @select('cars') cars: Observable<Car>;
  id: any;
  newComment: string;

  constructor(private carActions: CarActions, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.newComment = '';
  }

  ngOnInit() {
    this.carActions
      .getCarById(this.id);
  }

  commentCar() {
    this.carActions
      .pushSingleComment(this.id, this.newComment);

    this.newComment = '';
  }
}
