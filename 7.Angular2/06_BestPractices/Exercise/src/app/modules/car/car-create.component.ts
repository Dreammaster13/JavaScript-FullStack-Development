import {Component} from '@angular/core';
import {Car} from '../../interfaces/car.interface';
import {CarActions} from './car.actions';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-form.html',
  styles: [``]
})

export class CarCreateComponent {
  car: Car;

  constructor(private carActions: CarActions) {
    this.car = {
      id: null,
      make: '',
      model: '',
      year: null,
      engine: null,
      owner: '',
      image: '',
      createdOn: null,
      comments: []
    };
  }

  onSubmit() {
    const newCar = this.car;

    this.carActions
      .postSingleCar(newCar);
  }
}
