import {Component} from '@angular/core';
import {Car} from '../../interfaces/car';
import {DataService} from '../../services/data.service';
import {renderDetachView} from '@angular/core/src/view/view_attach';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-form.html',
  styles: [``]
})

export class CarCreateComponent {
  car: Car;

  constructor(private dataService: DataService) {
    this.car = new Car();
  }

  onSubmit() {
    const newCar = this.car;
    this.dataService
      .postSingleCar(newCar)
      .then((data) => {
        console.log(data);
        console.log('car created successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
