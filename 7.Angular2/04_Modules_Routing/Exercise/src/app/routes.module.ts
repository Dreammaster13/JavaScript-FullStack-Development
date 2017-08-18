import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {CarsAllComponent} from './modules/car/cars.all.component';
import {CarIdComponent} from './modules/car/car.id.component';
import {OwnersAllComponent} from './modules/owner/owners.all.component';
import {OwnerIdComponent} from './modules/owner/owner.id.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars/all', component: CarsAllComponent},
  {path: 'cars/:id', component: CarIdComponent},
  {path: 'owners/all', component: OwnersAllComponent},
  {path: 'owners/:id', component: OwnerIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {}
