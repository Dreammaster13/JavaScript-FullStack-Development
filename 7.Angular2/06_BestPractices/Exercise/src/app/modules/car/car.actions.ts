import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store/IAppState.interface';
import {DataService} from '../../services/data.service';

export const GET_HOME_CARS_SUCCESS = 'cars/HOME-CARS-SUCCESS';
export const GET_ALL_CARS_SUCCESS = 'cars/ALL_CARS-SUCCESS';
export const GET_CAR_BY_ID_SUCCESS = 'cars/BY_ID_SUCCESS';
export const GET_EMPTY_CAR_SUCCESS = 'cars/EMPTY_CAR_SUCCESS';
export const POST_SINGLE_CAR_SUCCESS = 'cars/PUSH_SINGLE_SUCCESS';
export const PUSH_SINGLE_COMMENT_SUCCESS = 'cars/PUSH_COMMENT_SUCCESS';
export const ORDER_BY_DATE_ASC = 'cars/ORDER_BY_DATE_ASC';
export const ORDER_BY_DATE_DESC = 'cars/ORDER_BY_DATE_DESC';
export const ORDER_BY_OWNER = 'cars/ORDER_BY_OWNER';

@Injectable()
export class CarActions {
  constructor(private ngRedux: NgRedux<IAppState>,
              private dataService: DataService) {
  }

  getHomeCars() {
    console.log('car actions - getHomeCars()');
    this.dataService
      .getCarsAll()
      .then((cars) => {
        this.ngRedux.dispatch({
          type: GET_HOME_CARS_SUCCESS,
          cars
        });
      })
      .catch(err => console.log(err));
  }

  getAllCars() {
    console.log('car actions - getAllCars()');
    this.dataService
      .getCarsAll()
      .then((cars) => {
        console.log('cars isFrozen = ' + Object.isFrozen(cars));

        this.ngRedux.dispatch({
          type: GET_ALL_CARS_SUCCESS,
          cars
        });
      })
      .catch(err => console.log(err));
  }

  getCarById(id) {
    this.dataService
      .getCarById(id)
      .then((car) => {
        this.ngRedux.dispatch({
          type: GET_CAR_BY_ID_SUCCESS,
          car
        });
      })
      .catch(err => console.log(err));
  }

  postSingleCar(newCar) {
    this.dataService
      .postSingleCar(newCar)
      .then((car) => {
        this.ngRedux.dispatch({
          type: POST_SINGLE_CAR_SUCCESS,
          car
        });
      })
      .catch(err => console.log(err));
  }

  pushSingleComment(id, comment) {
    this.dataService
      .pushSingleComment(id, comment)
      .then((car) => {
        this.ngRedux.dispatch({
          type: PUSH_SINGLE_COMMENT_SUCCESS,
          car
        });
      })
      .catch(err => console.log(err));
  }
}
