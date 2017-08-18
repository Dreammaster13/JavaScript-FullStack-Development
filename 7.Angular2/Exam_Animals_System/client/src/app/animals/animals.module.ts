import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AnimalsService} from './animals.service';
import {BoxShadowModule} from '../core/box-shadow.module';

import {AddAnimalComponent} from './add-animal.component';
import {AnimalDetailsComponent} from './animal-details.component';
import {AnimalsAllComponent} from './animals-all.component';

@NgModule({
  declarations: [
    AddAnimalComponent,
    AnimalsAllComponent,
    AnimalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BoxShadowModule
  ],
  providers: [AnimalsService]
})

export class AnimalsModule {
}
