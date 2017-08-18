import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgRedux, NgReduxModule} from 'ng2-redux';
import {IAppState} from './store/IAppState.interface';
import {store} from './store/store';
import {CommonActions} from './store/common.actions';
import {CarActions} from './modules/car/car.actions';
import {OwnerActions} from './modules/owner/owner.actions';

import {AppRoutesModule} from './routes.module';

import {CarsModule} from './modules/car/cars.module';
import {OwnersModule} from './modules/owner/owners.module';
import {BoxShadowModule} from './directives/box-shadow.module';

import {AppComponent} from './app.component';
import {NavComponent} from './modules/nav/nav.component';
import {HomeComponent} from './modules/home/home.component';

import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    CarsModule,
    OwnersModule,
    BoxShadowModule,
    NgReduxModule
  ],
  providers: [DataService, CarActions, OwnerActions, CommonActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
