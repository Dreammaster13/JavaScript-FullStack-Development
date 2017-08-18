import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppRoutesModule} from '../../routes.module';
import {BoxShadowModule} from '../../directives/box-shadow.module';
import {LitresPipe} from '../../pipes/litres.pipe';

import {CarsAllComponent} from './cars.all.component';
import {CarIdComponent} from './car-id.component';
import {CarCreateComponent} from './car-create.component';
import {CarEditComponent} from './car-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesModule,
    FormsModule,
    BoxShadowModule
  ],
  declarations: [
    CarsAllComponent,
    CarIdComponent,
    CarCreateComponent,
    CarEditComponent,
    LitresPipe
  ],
  exports: [
    CarsAllComponent,
    CarIdComponent,
    CarCreateComponent,
    CarEditComponent
  ],
  providers: []
})

export class CarsModule {}
