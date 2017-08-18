import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {NgReduxModule, NgRedux} from 'ng2-redux';
import {store, IAppState} from './store';

import {RoutesModule} from './routes.module';
import {CoreModule} from './core/core.module';
import {StatsModule} from './stats/stats.module';
import {UsersModule} from './users/users.module';
import {AnimalsModule} from './animals/animals.module';

import { AppComponent } from './app.component';

import {AuthService} from './core/auth.service';
import {ServerResponseService} from './core/server-response.service';

import {config} from './core/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    RoutesModule,
    StatsModule,
    CoreModule,
    UsersModule,
    AnimalsModule
  ],
  providers: [ServerResponseService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router
    ) {
    this.ngRedux.provideStore(store);
    config(ngRedux, router, authService);
  }
}
