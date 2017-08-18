import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';

import {BoxShadowModule} from '../core/box-shadow.module';

import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BoxShadowModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  providers: [
    UsersService,
    UsersActions
  ],
  exports: []
})

export class UsersModule {

}
