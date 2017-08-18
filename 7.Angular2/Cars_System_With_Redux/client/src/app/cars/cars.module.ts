import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CarsActions} from '../store/cars/cars.actions';
import {CarsService} from './cars.service';

import {AddCarComponent} from './add-car.component';
import {ListCarsComponent} from './list-cars.component';
import {CarDetailsComponent} from './car-details.component';

@NgModule({
  declarations: [
    AddCarComponent,
    ListCarsComponent,
    CarDetailsComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CarsActions, CarsService]
})
export class CarsModule {

}
