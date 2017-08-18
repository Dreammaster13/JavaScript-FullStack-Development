import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutesModule} from '../../routes.module';

import {CarsAllComponent} from './cars.all.component';
import {CarIdComponent} from './car.id.component';

@NgModule({
  imports: [CommonModule, AppRoutesModule],
  declarations: [CarsAllComponent, CarIdComponent],
  exports: [CarsAllComponent, CarIdComponent],
  providers: []
})

export class CarsModule {}
