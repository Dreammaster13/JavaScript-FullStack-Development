import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Car} from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit-form.html',
  styles: [``]
})

export class CarEditComponent implements OnInit {
  car: Car;
  id: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.dataService
      .getCarById(this.id)
      .then((data) => {
        this.car = data;
      })
      .catch(err => console.log(err));
  }

  updateCar() {
    this.dataService
      .updateSingleCar(this.car)
      .then((data) => {
        console.log(data);
        console.log('Car edited successfully');
      })
      .catch((err) => {
        console.log(err);
      });

  }
}
