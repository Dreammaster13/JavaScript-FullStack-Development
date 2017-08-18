import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';

import {CarsActions} from '../store/cars/cars.actions';

import {CarReviewModel} from './car-review.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
  private carId: number;
  car: object = {};
  reviews: Array<object> = [];
  review: CarReviewModel = new CarReviewModel(5);

  constructor(private route: ActivatedRoute,
              private ngRedux: NgRedux<IAppState>,
              private carsActions: CarsActions) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];

        this.carsActions.details(id);
        this.carsActions.allReviews(id);

        this.ngRedux
          .select(state => state.cars)
          .subscribe(cars => {
            this.car = cars.carDetails;
            this.reviews = cars.carReviews;
            //  subscribe does not refresh the page
            //  console.log(this.car);
          })
      })
  }

  like() {
    this.carsActions.like(this.car['id']);
  }

  submitReview() {
    this.carsActions
      .submitReview(this.review, this.car['id'])
  }
}
