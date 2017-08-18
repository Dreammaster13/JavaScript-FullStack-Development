import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateRoute} from './core/private-route';

import {StatsComponent} from './stats/stats.component';
import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component';
import {AddAnimalComponent} from './animals/add-animal.component';
import {AnimalsAllComponent} from './animals/animals-all.component';
import {AnimalDetailsComponent} from './animals/animal-details.component';
import {ProfileComponent} from './users/profile.component';

const routes: Routes = [
  {path: '', component: StatsComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {
    path: 'animals/add',
    component: AddAnimalComponent,
    canActivate: [PrivateRoute]
  },
  {path: 'animals/all', component: AnimalsAllComponent},
  {
    path: 'animals/details/:id',
    component: AnimalDetailsComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'users/profile',
    component: ProfileComponent,
    canActivate: [PrivateRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {

}
