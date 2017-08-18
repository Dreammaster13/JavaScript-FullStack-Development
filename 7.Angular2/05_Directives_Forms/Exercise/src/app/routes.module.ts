import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {CarsAllComponent} from './modules/car/cars.all.component';
import {CarIdComponent} from './modules/car/car-id.component';
import {CarCreateComponent} from './modules/car/car-create.component';
import {CarEditComponent} from './modules/car/car-edit.component';
import {OwnersAllComponent} from './modules/owner/owners-all.component';
import {OwnerIdComponent} from './modules/owner/owner-id.component';
import {OwnerCreateComponent} from './modules/owner/owner-create.component';
import {OwnerEditComponent} from './modules/owner/owner-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars/all', component: CarsAllComponent},
  {path: 'cars/create', component: CarCreateComponent},
  {path: 'cars/:id', component: CarIdComponent},
  {path: 'cars/edit/:id', component: CarEditComponent},
  {path: 'owners/all', component: OwnersAllComponent},
  {path: 'owners/create', component: OwnerCreateComponent},
  {path: 'owners/:id', component: OwnerIdComponent},
  {path: 'owners/edit/:id', component: OwnerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {}
