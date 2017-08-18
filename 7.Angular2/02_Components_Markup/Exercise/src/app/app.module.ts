import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation.component/navigation.component';
import {PlaneDetailsComponent} from './plane-details.component/plane-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlaneDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
