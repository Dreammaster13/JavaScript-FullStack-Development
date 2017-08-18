import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutesModule} from './routes.module';

import {CarsModule} from './modules/car/cars.module';
import {OwnersModule} from './modules/owner/owners.module';

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
    OwnersModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
